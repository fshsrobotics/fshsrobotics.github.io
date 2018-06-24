#include <stdio.h>

int main() {
    int size;
    int counter = 0;
    printf("Enter a size: ");
    scanf("%d", &size);

    while (counter < size) {
        printf("#");
        counter = counter + 1;
    }

    return 0;
}