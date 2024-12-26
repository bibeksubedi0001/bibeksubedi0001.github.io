import pygame
import sys
import random
import time

# **Initialization**
pygame.init()
clock = pygame.time.Clock()

# **Constants**
SCREEN_WIDTH, SCREEN_HEIGHT = 800, 600
BACKGROUND_COLOR = (0, 0, 0)
SNAKE_COLOR = (0, 255, 0)
FOOD_COLOR = (255, 0, 0)
SCORE_FONT = pygame.font.SysFont("Arial", 24)

# **Game Variables**
snake_pos = [100, 50]
snake_body = [[100, 50], [90, 50], [80, 50]]
food_pos = [random.randrange(1, (SCREEN_WIDTH//10)) * 10, random.randrange(1, (SCREEN_HEIGHT//10)) * 10]
food_spawn = True
direction = 'RIGHT'
change_to = direction
score = 0

# **Screen Setup**
screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
pygame.display.set_caption('Snake Game')

# **Game Loop**
while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()
        elif event.type == pygame.KEYDOWN:
            if event.key == pygame.K_RIGHT and direction != 'LEFT':
                change_to = 'RIGHT'
            elif event.key == pygame.K_LEFT and direction != 'RIGHT':
                change_to = 'LEFT'
            elif event.key == pygame.K_UP and direction != 'DOWN':
                change_to = 'UP'
            elif event.key == pygame.K_DOWN and direction != 'UP':
                change_to = 'DOWN'

    # **Direction Update**
    if change_to == 'RIGHT' and direction != 'LEFT':
        direction = 'RIGHT'
    elif change_to == 'LEFT' and direction != 'RIGHT':
        direction = 'LEFT'
    elif change_to == 'UP' and direction != 'DOWN':
        direction = 'UP'
    elif change_to == 'DOWN' and direction != 'UP':
        direction = 'DOWN'

    # **Snake Movement**
    if direction == 'RIGHT':
        snake_pos[0] += 10
    elif direction == 'LEFT':
        snake_pos[0] -= 10
    elif direction == 'UP':
        snake_pos[1] -= 10
    elif direction == 'DOWN':
        snake_pos[1] += 10

    # **Snake Body Update**
    snake_body.insert(0, list(snake_pos))
    if snake_pos == food_pos:
        score += 1
        food_spawn = False
    else:
        snake_body.pop()

    # **Food Spawn**
    if not food_spawn:
        food_pos = [random.randrange(1, (SCREEN_WIDTH//10)) * 10, random.randrange(1, (SCREEN_HEIGHT//10)) * 10]
    food_spawn = True

    # **Boundary Check**
    if (snake_pos[0] < 0 or snake_pos[0] > SCREEN_WIDTH-10) or (snake_pos[1] < 0 or snake_pos[1] > SCREEN_HEIGHT-10):
        print("Game Over! Final Score:", score)
        pygame.quit()
        sys.exit()

    # **Self Collision Check**
    for block in snake_body[1:]:
        if snake_pos == block:
            print("Game Over! Final Score:", score)
            pygame.quit()
            sys.exit()

    # **Draw Everything**
    screen.fill(BACKGROUND_COLOR)
    for pos in snake_body:
        pygame.draw.rect(screen, SNAKE_COLOR, pygame.Rect(pos[0], pos[1], 10, 10))
    pygame.draw.rect(screen, FOOD_COLOR, pygame.Rect(food_pos[0], food_pos[1], 10, 10))
    text = SCORE_FONT.render("Score: " + str(score), True, (255, 255, 255))
    screen.blit(text, [10, 10])

    # **Update Display**
    pygame.display.flip()
    clock.tick(15)
