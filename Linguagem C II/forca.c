#include <stdio.h>
#include <string.h>


void showWelcomeMessage(){
    printf("*******************");
    printf("*  Jogo da Forca  *");
    printf("*******************");
}

int main()
{
    showWelcomeMessage();
    
    char secretPhrase[20];
    char guesses[26];
    int tries = 0;

    sprintf(secretPhrase, "MELANCIA");

    int guessed = 0;
    int strangled = 0;

    do
    {

        char guess;

        printf("Chute uma letra:\n\n");
        scanf(" %c", &guess);
        printf("\n");

        guesses[tries] = guess;
        tries++;

        for (int i = 0; i < strlen(secretPhrase); i++)
        {
            int wasGuessed = 0;

            for (int j = 0; j < tries; j++)
            {
                if (guesses[j] == secretPhrase[i])
                {
                    wasGuessed = 1;
                    break;
                }
            }

            if (wasGuessed)
            {
                printf("%c ", secretPhrase[i]);
            }
            else
            {
                printf("_ ");
            }
        }

        printf("\n\n");

    } while (!guessed && !strangled);

    return 0;
}