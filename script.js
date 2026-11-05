<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CAPPY // BREACH</title>
    <link rel="stylesheet" href="style.css">
</head> 
<body>

    <!-- ГЛУБОКИЙ ТЕМНЫЙ ФОН -->
    <div class="bg-dark"></div>

    <!-- ШУМ + СКАНЛАЙНЫ -->
    <div class="scanlines"></div>
    <div class="noise"></div>

    <!-- ОБЩИЙ КОНТЕЙНЕР -->
    <div class="scene-wrapper">
        
        <!-- ЦЕНТРАЛЬНАЯ КАРТОЧКА -->
        <div class="card-container" id="mainCard">
            
            <!-- КАПРИ (ПОВЕРХ КАРТОЧКИ) -->
            <img src="cappy.png" alt="Cappy" class="cappy-sitting" id="cappy">

            <div class="card">
                
                <!-- Шапка карточки -->
                <div class="card-header">
                    <!-- АВАТАРКА 120x120 -->
                    <div class="avatar">
                        <div class="avatar-inner">
                            <img src="avatar.png" alt="Max">
                        </div>
                    </div>
                    
                    <div class="header-info">
                        <h1 class="name" data-text="Макс" id="name">Макс</h1>
                        <p class="subtitle">15 лет</p>
                        <p class="faction"> -E̸͂͑̈́ ̡͕̼̘̫̃́̾̋́͂̌͂̇r̸̢̨̤̮̹̫̙̫̮̾̽̂̚͝͠͝ö̵̖̞̘̻̟̮̣͍̲̺̬͈͎̺̏̀̒̚r̸̀͗͗̚- ̗͓</p>
                    </div>
                </div>

                <!-- Описание -->
                <div class="description">
                  Ну что, ты перешёл или перешла по ссылке? Отлично, ниже есть мои соцсети, как видишь, в тт ты можешь написать мне в личку, а тг — это ссылка на переходник в мой тгк.
                </div>

                <!-- СОЦИАЛЬНЫЕ СЕТИ -->
                <div class="social-links">
                    <!-- TikTok -->
                    <a href="https://www.tiktok.com/@deltagreedy?_r=1&_t=ZT-9B9iBWRNLSv" target="_blank" class="social-btn tiktok" title="TikTok">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                        </svg>
                    </a>
                    
                    <!-- Telegram -->
                    <a href="https://t.me/+F1Ag5pyS6I4wNDMy" target="_blank" class="social-btn telegram" title="Telegram">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                        </svg>
                    </a>
                </div>

            </div>
        </div>

    </div>

    <script src="script.js"></script>
</body>
</html>
