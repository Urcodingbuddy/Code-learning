#include <stdio.h>
#include <stdlib.h>

int main() {
    printf("This is a simple program demonstrating the use of exit()\n");

    // Use exit() with a status of 0 (indicating successful execution)
    exit(0);

    // The code after exit() will not be executed
    printf("This line will not be printed\n");

    return 0;
}