<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Once you have Laravel installed and running, you can place this code
| in your `routes/api.php` file to serve data to your React frontend!
|
*/

Route::get('/profile', function () {
    return response()->json([
        'name' => 'yoga aditia ramadhan (from Laravel API)',
        'title' => 'Fullstack Developer',
        'bio' => 'Passionate developer crafting modern web experiences using React and Laravel. I specialize in building stunning user interfaces and robust APIs with cutting-edge technologies.',
        'avatar' => 'https://i.pravatar.cc/150?img=11',
        'skills' => ['React', 'Laravel', 'Tailwind CSS', 'MySQL', 'JavaScript', 'PHP']
    ]);
});
