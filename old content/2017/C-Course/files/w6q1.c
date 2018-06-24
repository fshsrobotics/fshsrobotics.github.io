#include <stdio.h>

int main() {
    int counter = 0;             // Start at 0
    printf("Enter a positive number: ");
    scanf("%d", &counter);
    while (counter >= 0) {       // while the counter is greater than or equal to 0
        printf("%d\n", counter); // print out the number
        counter = counter - 1;   // subtract 1 to the counter
    }

    return 0;
}