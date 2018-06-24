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

var equipSys = {};

equipSys.regroupid = /^[a-zA-Z]{2}\d{2}$/g;

// Get a group of all members and their groups
equipSys.getMembers = function () {
    return db.ref('/groups/').once('value').then(function(snapshot) {
        equipSys.members = snapshot.val();
    });
}

equipSys.addEquip = function(groupid, equipid, sticker) {
    console.log(groupid, equipid, sticker);
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

equipSys.getEquipmentName = function(equipid) {
    var name = equipSys.equipids[equipid];
    if (name) return name;
    return 'Unknown equipment';
}

// equipSys.addMember = function (user, groupID) {
//     var updates = {};
//     updates['/users/' + user] = groupID;
//     return db.ref().update(updates);
// }

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

equipSys.init = function() {
    equipSys.getMembers().then(function() {
        console.log(equipSys.members);
    });
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
    equipSys.init();
});