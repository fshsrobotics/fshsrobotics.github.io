// Initialize Firebase
var config = {
    apiKey: 'AIzaSyC31NIHNp5a1eO9KxtB6KCfRJlxeE_PPv0',
    authDomain: 'fshs-robotics.firebaseapp.com',
    databaseURL: 'https://fshs-robotics.firebaseio.com',
    projectId: 'fshs-robotics',
    storageBucket: 'fshs-robotics.appspot.com',
    messagingSenderId: '481459358670'
};
firebase.initializeApp(config);
var db = firebase.database();

var loginSys = {};
var equipSys = {};
var attendanceSys = {};

// Cache the users here to prevent writing duplicated values
attendanceSys.currRollCache = [];

// Get all rolls for /attendance/
attendanceSys.getAllRolls = function(week, studentid) {
    db.ref('/roll/').once('value').then(function(snapshot) {
        console.log(snapshot.val());
        $.each(snapshot.val(), function (i, v) {
            $('#adminattendance-week').append($('<option>', { 
                value: i,
                text : i 
            }));
        });

        $('#adminattendance-week').on('change', function(e) {
            attendanceSys.showAttendanceInfo($(this).val());
        });

    });
}

// Add student as attended for a particular week
attendanceSys.addStudentAttend = function(week, studentid) {
    db.ref('/roll/' + week).once('value').then(function(snapshot) {
        if (snapshot.val() !== null) {
            var newAttendanceKey = db.ref('/roll/' + week + '/students/').push().key;
            var updates = {};
            updates['/roll/' + week + '/students/' + newAttendanceKey] = studentid;
            db.ref().update(updates, attendanceSys.showAttendanceInfo(week));
        } else {
            db.ref('/roll/' + week).set({
                students: [studentid]
            });
            attendanceSys.showAttendanceInfo(week);
        }
    });
}

// Show attendance information for a particular week
attendanceSys.showAttendanceInfo = function(week) {
    $('#attendance-list').empty().append("Loading attendance...");
    db.ref('/students/').once('value').then(function(studentssnapshot) {
        db.ref('/roll/' + week + '/').once('value').then(function(snapshot) {
            var todayAttendance = snapshot.val();
            var currstudents = studentssnapshot.val();
            attendanceSys.notFound = [];
            if (todayAttendance == null) {
                $('#attendance-list').empty().append("No attendance today");
                return;
            }
            // Load attendance list
            $('#attendance-list').empty();
            $('#attendance-header').empty().append('Attendance for ' + week);

            var shownStudents = [];

            $.each(todayAttendance.students, function(i, studentAttended) {
                if (studentAttended && currstudents[studentAttended] && shownStudents.indexOf(studentAttended) <= -1) {
                    shownStudents.push(studentAttended);
                    $('#attendance-list').append('<li>' + currstudents[studentAttended].name + ' (' + currstudents[studentAttended].year + ')</li>');
                }
            });
        });
    });
}

// Add a new student to the database
attendanceSys.createStudent = function (name, year, card) {
    var reStudentID = new RegExp(/^\d{9}$/i);
    if (card.match(reStudentID)) {
        db.ref('/students/' + card).set({
            name: name,
            year: year
        });
    }
    else {
        return false;
    }
}

/**
 * Login via Firebase to enable write access
 * @param  type the type of login as a string
 * @param  password the password for the Firebase user
 */
loginSys.login = function(type, password) {
    $('#ls-' + type + '-login-status').empty();
    var email;
    if (type === "student") {
        email = "student@robo.kcnotes.net";
    } else if (type === "admin") {
        email = "admin@robo.kcnotes.net";
    } else {
        return;
    }
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
        if (type === "student") {
            loginSys.showStudentInterface();
        }
    }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        $('#ls-' + type + '-login-status').append("Error: " + error.message);
    });
}

// Log out of Firebase
loginSys.logout = function() {
    firebase.auth().signOut().then(function(d) {
        loginSys.showLoginInterface();
    }).catch(function(error) {
        // error
    });
}

loginSys.showStudentInterface = function() {
    $('#loginsystem').hide();
    $('#equipmentsystem').show();
    equipSys.getMembers().then(function() {
        $('#es-allgroups').empty();
        $.each(equipSys.members, function(i, group) {
            $('#es-allgroups').append('<b>' + i + '</b>: ' + group.members.join(', ') + '<br/>');
        });
    });
}
loginSys.showAdminInterface = function() {
    $('#loginsystem').hide();
    $('#equipmentsystem').hide();
    $('#adminsystem').show();
    if ($('#adminattendance').length) {
        $('#adminattendance').show();
        attendanceSys.getAllRolls();
    }
}
loginSys.showLoginInterface = function() {
    $('#loginsystem').show();
    $('#equipmentsystem').hide();
    $('#adminsystem').hide();
    $('#adminattendance').hide();
}

equipSys.regroupid = /^[a-zA-Z]{2}\d{2}$/g;

/**
 * Get a list of members in a group
 * @return list of members
 */
equipSys.getMembers = function () { 
    return db.ref('/groups/').once('value').then(function(snapshot) {
        equipSys.members = snapshot.val();
    });
}

/**
 * Borrow an equipment to the database for a particular group
 * @param groupid the group's assigned ID
 * @param equipid the equipment ID they are borrowing
 * @param sticker (optional) the sticker on the equipment hey are borrowing
 */
equipSys.addEquip = function(groupid, equipid, sticker) {
    db.ref('/groups/' + groupid + '/').once('value').then(function(snapshot) {
        if (snapshot.val() !== null) {
            var newEquipKey = db.ref('/groups/' + groupid + '/equipment/').push().key;
            var updates = {};
            updates['/groups/' + groupid + '/equipment/' + newEquipKey] = {
                "equipid": equipid,
                "sticker": sticker
            }
            return db.ref().update(updates, equipSys.fillGroupInformation(groupid));
        } else {
            $('#es-submit-status').empty().append("The group you entered does not exist.");
            return null;
        }
    });
}

/**
 * Get the equipment name from an ID
 * @param  equipid the equipment ID you want the name for
 * @return the readable equipment name
 */
equipSys.getEquipmentName = function(equipid) {
    var name = equipSys.equipids[equipid];
    if (name) return name;
    return 'Unknown equipment';
}

/**
 * Get the request from the equipment form
 * @return an object with groupid, equipment and stickerid
 */
equipSys.getResponse = function() {
    var groupid = $('#es-groupid').val().toUpperCase();
    var equipment = $('#es-equipment option:selected').attr('data-eid');
    var stickerid = $('#es-stickerid').val();
    return {
        "groupid": groupid,
        "equipment": equipment,
        "stickerid": stickerid ? stickerid : ""
    };
}

equipSys.loadGroupData = function() {
    var groupid = $('#es-groupid').val().toUpperCase();
    // Check it is in the valid format
    if (equipSys.regroupid.test(groupid)) {
        // Load the data
        equipSys.fillGroupInformation(groupid);
    } else {
        $('#es-group-info').empty();
    }
}
equipSys.fillGroupInformation = function(groupid) {
    $('#es-group-info').empty().append("Loading group data...");
    db.ref('/groups/' + groupid + '/').once('value').then(function(snapshot) {
        // No such group
        var group = snapshot.val();
        if (group == null) {
            $('#es-group-info').empty().append("No such group");
            return;
        }
        // Load group information
        $('#es-group-info').empty().append("<b>Group members:</b>");
        $.each(snapshot.val().members, function(i, member) {
            $('#es-group-info').append('<li>' + member + '</li>');
        });
        if (groupid === "OR01") {
            $('#es-group-info').append('<li><span style="font-size:40px;line-height:200%">&#x1F40E;</span></li>');
        }
        // Load group equipment info
        $('#es-group-info').append("<b>Equipment borrowed</b>");
        if (!snapshot.val().equipment) {
            $('#es-group-info').append("<div>No records found</div>");
            return;
        }
        $.each(snapshot.val().equipment, function(i, equipment) {
            var equipString = '<li>' + equipSys.getEquipmentName(equipment.equipid);
            if (equipment.sticker !== "") {
                equipString += ' (Sticker: ' + equipment.sticker + ')';
            }
            equipString += '</li>';
            $('#es-group-info').append(equipString);
        });
    });
}

function init() {
    $('#createaccount').hide();
    $('#loginsystem').hide();
    $('#adminsystem').hide();
    $('#adminattendance').hide();
    $('#equipmentsystem').hide();
    if (!(window.location.pathname).match(/(equipment|attendance)/gi)) return;
    firebase.auth().onAuthStateChanged(function(user) {
        $('#login-loading').hide();
        if (user) {
            if (user.email === "student@robo.kcnotes.net") {
                loginSys.showStudentInterface();
            } else if (user.email === "admin@robo.kcnotes.net") {
                loginSys.showAdminInterface();
            }
        } else {
            $('#loginsystem').show();
        }
    });

    $('#robosystem form').submit(function(e) {
        e.preventDefault();
    });
    $('#ls-student-login').on('click', function() {
        loginSys.login("student", $('#ls-student').val());
        $('#ls-student').val("");
    });
    $('#ls-admin-login').on('click', function() {
        loginSys.login("admin", $('#ls-admin').val());
        $('#ls-admin').val("");
    });
    $('.ls-logout').on('click', function() {
        loginSys.logout();
    });
    $('#attendance-check').on('click', function() {
        var reStudentID = new RegExp(/^\d{9}$/i);
        if (attendanceSys.currRollCache.indexOf($('#attendance-student').val()) > -1) {
            $('#attendance-submit-status').empty().append("Oy please don't >:(");
            $('#attendance-student').val('');
            $('#attendance-student').focus();
            return;
        } else if (!reStudentID.test($('#attendance-student').val())) {
            $('#attendance-submit-status').empty().append("Oy that's not a valid student ID >:(");
            $('#attendance-student').val('');
            $('#attendance-student').focus();
            return;
        } 
        db.ref('/students/' + $('#attendance-student').val()).once('value').then(function(snapshot) {
            // User doesn't exist
            if (!snapshot.val() || !snapshot.val().name) {
                // They have filled in the create form
                if ($('#createaccount-fullname').val() !== '') {
                    $('#attendance-submit-status').empty();
                    attendanceSys.createStudent($('#createaccount-fullname').val(), $('#createaccount-year').val(), $('#attendance-student').val());
                    attendanceSys.addStudentAttend($('#attendance-week').val(), $('#attendance-student').val());
                    $('#createaccount').hide();
                    $('#attendance-student').val('');
                    $('#createaccount-fullname').val('');
                    $('#createaccount-year').val('');
                    $('#attendance-student').focus();
                } else {
                    // They have not filled in the create form
                    $('#attendance-submit-status').empty().append('Account could not be found, please create one.');
                    $('#createaccount').show();
                }
            } else {
                $('#attendance-submit-status').empty();
                attendanceSys.currRollCache.push($('#attendance-student').val());
                attendanceSys.addStudentAttend($('#attendance-week').val(), $('#attendance-student').val());
                $('#attendance-student').val('');
                $('#attendance-student').focus();
            }
        })
    });

    $('#createaccount-check').on('click', function (e) {
        $('#attendance-submit-status').empty();
        attendanceSys.createStudent($('#createaccount-fullname').val(), $('#createaccount-year').val(), $('#attendance-student').val());
        attendanceSys.addStudentAttend($('#attendance-week').val(), $('#attendance-student').val());
        $('#createaccount').hide();
        $('#attendance-student').val('');
        $('#attendance-student').focus();
    })

    $('#es-groupid').on('input', function(e){
        equipSys.loadGroupData();
    });
    $('#es-submit').on('click', function() {
        $('#es-submit-status').empty();
        if ($('#es-groupid').val() === "") {
            $('#es-submit-status').empty().append("The group you entered does not exist.");
            return;
        }
        var aE = equipSys.getResponse();
        equipSys.addEquip(aE.groupid, aE.equipment, aE.stickerid);
    });
}

/* Equipment IDs to equipment names */
equipSys.equipids = {
    nm: "NXT Motor",
    eml: "EV3 Large Motor",
    emm: "EV3 Medium Motor",
    nsl: "NXT Light Sensor",
    nsc: "NXT Colour Sensor (Mindstorms)",
    nst: "NXT Touch Sensor",
    nss: "NXT Sonar Sensor",
    esl: "EV3 Light Sensor",
    esc: "EV3 Colour Sensor",
    est: "EV3 Touch Sensor",
    ess: "EV3 Sonar Sensor",
    dist: "Distance Sensor",
    rcx: "RCX Brick",
    nxt: "NXT Brick",
    ev3: "EV3 Brick",
    tool: "Toolkit",
    ncam: "NXTCam",
    pixy: "Pixy Camera"
}
$(function() {
    init();
});