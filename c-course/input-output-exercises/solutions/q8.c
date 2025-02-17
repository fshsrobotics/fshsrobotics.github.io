#include <stdio.h>

int main() {
  int cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9;
  printf("Enter the board: ");
  scanf("%d %d %d", &cell1, &cell2, &cell3);
  scanf("%d %d %d", &cell4, &cell5, &cell6);
  scanf("%d %d %d", &cell7, &cell8, &cell9);

  if (cell1 == 1 && cell2 == 1 && cell3 == 1) {
    printf("Player 1 has won!\n");
  } else if (cell4 == 1 && cell5 == 1 && cell6 == 1) {
    printf("Player 1 has won!\n");
  } else if (cell7 == 1 && cell8 == 1 && cell9 == 1) {
    printf("Player 1 has won!\n");
  } else if (cell1 == 1 && cell4 == 1 && cell7 == 1) {
    printf("Player 1 has won!\n");
  } else if (cell2 == 1 && cell5 == 1 && cell8 == 1) {
    printf("Player 1 has won!\n");
  } else if (cell3 == 1 && cell6 == 1 && cell9 == 1) {
    printf("Player 1 has won!\n");
  } else if (cell1 == 1 && cell5 == 1 && cell9 == 1) {
    printf("Player 1 has won!\n");
  } else if (cell3 == 1 && cell5 == 1 && cell7 == 1) {
    printf("Player 1 has won!\n");
  } else if (cell1 == 2 && cell2 == 2 && cell3 == 2) {
    printf("Player 2 has won!\n");
  } else if (cell4 == 2 && cell5 == 2 && cell6 == 2) {
    printf("Player 2 has won!\n");
  } else if (cell7 == 2 && cell8 == 2 && cell9 == 2) {
    printf("Player 2 has won!\n");
  } else if (cell2 == 2 && cell4 == 2 && cell7 == 2) {
    printf("Player 2 has won!\n");
  } else if (cell2 == 2 && cell5 == 2 && cell8 == 2) {
    printf("Player 2 has won!\n");
  } else if (cell3 == 2 && cell6 == 2 && cell9 == 2) {
    printf("Player 2 has won!\n");
  } else if (cell2 == 2 && cell5 == 2 && cell9 == 2) {
    printf("Player 2 has won!\n");
  } else if (cell3 == 2 && cell5 == 2 && cell7 == 2) {
    printf("Player 2 has won!\n");
  } else {
    printf("No players have won.\n");
  }
  return 0;
}