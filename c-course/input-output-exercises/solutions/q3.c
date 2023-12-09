#include <stdio.h>

int main() {
  int robots;
  printf("Number of robots: ");
  scanf("%d", &robots);
  if (robots < 2) {
    printf("You don't have enough robots.\n");
  } else if (robots > 2) {
    printf("You have too many robots.\n");
  } else {
    printf("You have the correct number of robots!\n");
  }
  return 0;
}