#include <stdio.h>

int main() {
  int money = 10;
  int scoops;
  printf("How many scoops? ");
  scanf("%d", &scoops);
  int price;
  printf("How much per scoop? ");
  scanf("%d", &price);
  
  if (money >= price * scoops) {
    printf("You can buy the icecream!\n");
  } else {
    printf("Rip, you don't have enough money :(\n");
  }
  return 0;
}