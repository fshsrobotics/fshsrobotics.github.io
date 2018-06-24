// Question 5
#include <stdio.h>

int main() {
    int cell11, cell12, cell13,
        cell21, cell22, cell23,
        cell31, cell32, cell33;

    int winner = 0;

    // Get the board
    scanf("%d %d %d", &cell11, &cell12, &cell13);
    scanf("%d %d %d", &cell21, &cell22, &cell23);
    scanf("%d %d %d", &cell31, &cell32, &cell33);

    // Check if board has a winner
    // Check left to right
    if (cell11 && cell12 && cell13) {
        if (cell11 + cell12 + cell13 == 3) {
            winner = 1;
        }
        if (cell11 + cell12 + cell13 == 6) {
            winner = 2;
        }
    }
    if (cell21 && cell22 && cell23) {
        if (cell21 + cell22 + cell23 == 3) {
            winner = 1;
        }
        if (cell21 + cell22 + cell23 == 6) {
            winner = 2;
        }
    }
    if (cell31 && cell32 && cell33) {
        if (cell31 + cell32 + cell33 == 3) {
            winner = 1;
        }
        if (cell31 + cell32 + cell33 == 6) {
            winner = 2;
        }
    }
    // Check top to bottom
    if (cell11 && cell21 && cell31) {
        if (cell11 + cell21 + cell31 == 3) {
            winner = 1;
        }
        if (cell11 + cell21 + cell31 == 6) {
            winner = 2;
        }
    }
    if (cell12 && cell22 && cell32) {
        if (cell12 + cell22 + cell32 == 3) {
            winner = 1;
        }
        if (cell12 + cell22 + cell32 == 6) {
            winner = 2;
        }
    }
    if (cell13 && cell23 && cell33) {
        if (cell13 + cell23 + cell33 == 3) {
            winner = 1;
        }
        if (cell13 + cell23 + cell33 == 6) {
            winner = 2;
        }
    }

    // Check diagonals
    if (cell11 && cell22 && cell33) {
        if (cell11 + cell22 + cell33 == 3) {
            winner = 1;
        }
        if (cell11 + cell22 + cell33 == 6) {
            winner = 1;
        }
    }
    if (cell13 && cell22 && cell31) {
        if (cell13 + cell22 + cell31 == 3) {
            winner = 1;
        }
        if (cell13 + cell22 + cell31 == 6) {
            winner = 1;
        }
    }
    if (winner == 0) {
        printf("No players have won.\n");
    } else if (winner == 1) {
        printf("Player 1 has won!\n");
    } else if (winner == 2) {
        printf("Player 2 has won!\n");
    }
    return 0;
}