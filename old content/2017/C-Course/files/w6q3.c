#include <stdio.h>

int main() {
    int n;
    printf("n: ");
    scanf("%d", &n);
    int sum = 0; // this will hold our sum
    int counter = 1; // we start at 1
    while (counter <= n) {   
        sum = sum + counter; // add counter into sum
        printf("%d\n", sum); // print out the sum
        counter = counter + 1;
    }

    return 0;
}