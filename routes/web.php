<?php

use App\Http\Controllers\LogoController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\BusinessleadController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\TaskController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/scrm-contacts', [ContactController::class, 'index'])->name('contacts.index');
    Route::get('/scrm-contacts/create', [ContactController::class, 'create'])->name('contacts.create');
    Route::post('/scrm-contacts/store', [ContactController::class, 'store'])->name('contacts.store');
    Route::get('/scrm-contacts/{id}/edit', [ContactController::class, 'edit'])->name('contacts.edit');
    Route::patch('/scrm-contacts/{id}', [ContactController::class, 'update'])->name('contacts.update');
    Route::post('/scrm-contacts/{id}/{asset}', [ContactController::class, 'deleteasset'])->name('contacts.deleteasset');
    Route::delete('/scrm-contacts/{id}', [ContactController::class, 'destroy'])->name('contacts.destroy');

    Route::get('/scrm-business-leads', [BusinessleadController::class, 'index'])->name('leads.index');
    Route::get('/scrm-business-leads/create', [BusinessleadController::class, 'create'])->name('leads.create');
    Route::post('/scrm-business-leads/store', [BusinessleadController::class, 'store'])->name('leads.store');
    Route::get('/scrm-business-leads/{id}/edit', [BusinessleadController::class, 'edit'])->name('leads.edit');
    Route::patch('/scrm-business-leads/{id}', [BusinessleadController::class, 'update'])->name('leads.update');
    Route::delete('/scrm-business-leads/{id}', [BusinessleadController::class, 'destroy'])->name('leads.destroy');
    //leads-activity-routes
    Route::get('/scrm-business-leads/{id}/activity', [BusinessleadController::class, 'activity'])->name('leads.activity');
    Route::post('/scrm-business-leads/activity/store', [BusinessleadController::class, 'storeactivity'])->name('leads.storeactivity');


    //project management routes
    Route::get('/scrm-projects', [ProjectController::class, 'index'])->name('projects.index');
    Route::get('/scrm-projects/create', [ProjectController::class, 'create'])->name('projects.create');
    Route::post('/scrm-projects/store', [ProjectController::class, 'store'])->name('projects.store');
    Route::get('/scrm-projects/{id}/edit', [ProjectController::class, 'edit'])->name('projects.edit');
    Route::patch('/scrm-projects/{id}', [ProjectController::class, 'update'])->name('projects.update');
    Route::delete('/scrm-projects/{id}', [ProjectController::class, 'destroy'])->name('projects.destroy');
    //leads-activity-routes
    Route::get('/scrm-projects/{id}/activity', [ProjectController::class, 'activity'])->name('projects.activity');
    Route::post('/scrm-projects/activity/store', [ProjectController::class, 'storeactivity'])->name('projects.storeactivity');
    //project management routes completed

    //Task management routes
    Route::get('/scrm-tasks', [TaskController::class, 'index'])->name('tasks.index');
    Route::get('/scrm-tasks/create', [TaskController::class, 'create'])->name('tasks.create');
    Route::post('/scrm-tasks/store', [TaskController::class, 'store'])->name('tasks.store');
    Route::get('/scrm-tasks/{id}/edit', [TaskController::class, 'edit'])->name('tasks.edit');
    Route::patch('/scrm-tasks/{id}', [TaskController::class, 'update'])->name('tasks.update');
    Route::delete('/scrm-tasks/{id}', [TaskController::class, 'destroy'])->name('tasks.destroy');
    //tasks-activity-routes
    Route::get('/scrm-tasks/{id}/duration', [TaskController::class, 'duration'])->name('tasks.duration');
    Route::post('/scrm-tasks/duration/store', [TaskController::class, 'storeduration'])->name('tasks.storeduration');
    //task management routes completed

    Route::get('/scrm-employees', [EmployeeController::class, 'index'])->name('employees.index');
    Route::get('/scrm-employees/create', [EmployeeController::class, 'create'])->name('employees.create');
    Route::post('/scrm-employees/store', [EmployeeController::class, 'store'])->name('employees.store');
    Route::get('/scrm-employees/{id}/edit', [EmployeeController::class, 'edit'])->name('employees.edit');
    Route::patch('/scrm-employees/{id}', [EmployeeController::class, 'update'])->name('employees.update');
    Route::delete('/scrm-employees/delete/{id}', [EmployeeController::class, 'destroy'])->name('employees.destroy');

    Route::get('/settings', [SettingController::class, 'index'])->name('settings.index');
    Route::get('/settings-create', [SettingController::class, 'create'])->name('settings.create');
    Route::post('/settings-store', [SettingController::class, 'store'])->name('settings.store');
    Route::get('/settings/{id}/edit', [SettingController::class, 'edit'])->name('settings.edit');
    Route::patch('/settings/{id}', [SettingController::class, 'update'])->name('settings.update');
    Route::delete('/settings-delete/{id}', [SettingController::class, 'destroy'])->name('settings.destroy');

    Route::get('/scrm/settings/logo', [LogoController::class, 'index'])->name('logo.index');
    Route::get('/scrm/settings/logo/show', [LogoController::class, 'show'])->name('logo.show');
    Route::get('/scrm/settings/logo/create', [LogoController::class, 'create'])->name('logo.create');
    Route::post('/scrm/settings/logo/store', [LogoController::class, 'store'])->name('logo.store');
    Route::get('/scrm/settings/logo/{id}/edit', [LogoController::class, 'edit'])->name('logo.edit');
    Route::patch('/scrm/settings/logo/{id}', [LogoController::class, 'update'])->name('logo.update');
    Route::delete('/scrm/settings/logo/{id}', [LogoController::class, 'destroy'])->name('logo.destroy');
});

require __DIR__ . '/auth.php';
