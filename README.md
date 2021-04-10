# devblog.adriangoldner.com
This is my personal development Blog over at devblog.adriangoldner.com

Feel Free to play around with the code. You can read everything that's going on with the code here over at my blog.

Cheers!

## Installation instructions

1. run `composer install`
2. run `php please make:user`
3. run `npm i` && `npm run watch` (or `npm run dev`)

## Environment file contents

### Development

```env
Dump your .env values here with senstive data removed.
```

### Production

```env
Dump your .env values here with senstive data removed.
```

## NGINX config

Add the following to your NGINX config __inside the server block__ enable static resource caching:
```
expires $expires;
```

And this __outside the server block__:
```
map $sent_http_content_type $expires {
    default    off;
    text/css    max;
    ~image/    max;
    application/javascript    max;
    application/octet-stream    max;
}
```

## Deploy script Forge

```bash
# don't deploy if we just changed something on production itself
if [[ $FORGE_DEPLOY_MESSAGE =~ "[BOT]" ]]; then
    echo "Automatically committed on production. Nothing to deploy."
    exit 0
fi

# change dir, reset, pull & install composer dependencies
cd $FORGE_SITE_PATH
git reset --hard && git clean -df
git pull origin git pull origin $FORGE_SITE_BRANCH
$FORGE_COMPOSER install --no-interaction --prefer-dist --optimize-autoloader

# Build them assets!
yarn
yarn production

# And finally clear & warm the caches
$FORGE_PHP artisan cache:clear # Clear the Laravel application cache.
$FORGE_PHP artisan config:cache # Clear and refresh the Laravel config cache.
$FORGE_PHP artisan route:cache # Clear and refresh the Laravel route cache.
$FORGE_PHP artisan statamic:stache:warm # Warm the Statamic stache.
$FORGE_PHP please social-shots:warm #warm social media image generation
$FORGE_PHP artisan storage:link # link public storage path to public directory

# restart php if necessary
( flock -w 10 9 || exit 1
    echo 'Restarting FPM...'; sudo -S service $FORGE_PHP_FPM reload ) 9>/tmp/fpmlock
```
