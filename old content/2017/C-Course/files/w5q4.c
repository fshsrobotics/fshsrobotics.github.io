// Question 4

#include <stdio.h>
int main() {
    printf("Guess my favourite number: ");
    int faveNumber;
    scanf("%d", &faveNumber);

    if (faveNumber == 17) {
        printf("You're right!\n");
    } 
    else {
        printf("You're wrong.\n");
    }

    return 0;
}