#include <stdio.h>

int main () {
	int numberOfChickens;
	scanf("%d", &numberOfChickens);
	if (numberOfChickens == 0) {
		printf("I have no chickens\n");
	} else if (numberOfChickens >= 13 && numberOfChickens <= 18) {
		printf("I am a teen number of chickens\n");
	}
	else {
		printf("I have %d chickens\n", numberOfChickens);
	}
	return 0;
}