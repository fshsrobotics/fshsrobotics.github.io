#include <stdio.h>

int main() {
  int faveNumber;
  printf("Guess my favourite number: ");
  scanf("%d", &faveNumber);
  if (faveNumber == 17) {
    printf("You're right!\n");
  } else {
    printf("You're wrong.\n");
  }
  return 0;
}