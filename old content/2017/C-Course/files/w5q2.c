// Question 2.2
#include <stdio.h>

int main() {
    int age;
    printf("Enter an age: ");
    scanf("%d", &age);
    printf("You are %d years old!\n", age);
    if (age >= 13 && age <= 19) {
        printf("You're also a teen.\n");
    }

    return 0;
}
