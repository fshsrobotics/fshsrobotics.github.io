// Question 3
#include <stdio.h>

int main() {
    int month;
    printf("Enter a month: ");
    scanf("%d", &month);

    // You can skip the squiggly brackets 
    // ONLY if there is one line afterwards.
    // If you're not sure, just keep them in.
    if (month == 1)       printf("January");
    else if (month == 2)  printf("February");
    else if (month == 3)  printf("March");
    else if (month == 4)  printf("April");
    else if (month == 5)  printf("May");
    else if (month == 6)  printf("June");
    else if (month == 7)  printf("July");
    else if (month == 8)  printf("August");
    else if (month == 9)  printf("September");
    else if (month == 10) printf("October");
    else if (month == 11) printf("November");
    else if (month == 12) printf("December");
    else                  printf("Not a valid month");

    printf("\n");
    return 0;
}