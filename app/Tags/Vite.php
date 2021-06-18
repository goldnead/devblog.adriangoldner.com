<?php

namespace App\Tags;

use Statamic\Tags\Tags;

class Vite extends Tags
{
    public function client()
    {
        config(["vite.dev_url" => env("APP_URL").":5000"]);
        return vite_client();
    }

    public function index()
    {
        config(["vite.dev_url" => env("APP_URL").":5000"]);
        return vite_tags();
    }
}
