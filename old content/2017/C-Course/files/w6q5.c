#include <stdio.h>

int main() {
    int size;
    int x = 0;
    int y = 0;
    printf("Enter a size: ");
    scanf("%d", &size);

    while (x < size) {
    	y = 0;
    	while (y < size) {
    		printf("#");
        	y = y + 1;
    	}
        printf("\n");
        x = x + 1;
    }

    return 0;
}