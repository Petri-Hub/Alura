#include <stdio.h>

int main(){

    int number;

    printf("Digite um número pra fazer a tabuada:\n\n");
    scanf("%d", &number);

    for(int i = 1; i <= 10; i++){
        printf("%d x %d = %d\n", number, i, number * i);
    }

    return 0;
}