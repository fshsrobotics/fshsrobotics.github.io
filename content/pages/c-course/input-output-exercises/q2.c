#include <stdio.h>

int main() {
  int pizzas;
  printf("How many pizzas: ");
  scanf("%d", &pizzas);
  int slices = pizzas * 8;
  printf("There are %d slices of pizza.\n", slices);
  printf("Each person gets %d.\n", slices / 5);
    return 0;
}