#include <stdio.h>

int main() {
  int age;
  printf("Enter your age: ");
  scanf("%d", &age);
  
  if (age < 13) {
    printf("Child ticket\n");
  } else if ((age >= 13 && age <= 19) || age >= 65) {
    printf("Concession ticket\n");
  } else {
    printf("Adult ticket\n");
  }
  return 0;
}