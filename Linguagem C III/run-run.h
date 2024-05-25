void freeMapMemory();
void allocMapMemory();
void scanMap();
void printGameMap();
int acabou();
void move(char direction);

struct mapa {
   char** matrix;
   int rows;
   int columns;
};

typedef struct mapa Map;