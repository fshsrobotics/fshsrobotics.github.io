#include <stdio.h>

int main() {
    int guess = 0;             // Start at 0
    printf("Guess my favourite number: ");
    while (guess != 17) {   
        scanf("%d", &guess);
        if (guess != 17) {
            printf("You're wrong! Try again: ");
        }
    }
    printf("You're right!");

    return 0;
}