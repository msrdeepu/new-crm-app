<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Models\Taskduration;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $taskList = Task::get(['*', 'id AS key']);
        return Inertia::render('Tasks/TaskList', [
            'taskList' => $taskList
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Tasks/CreateTask', [
            'record' => new Task(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //dd($request);
        $requestData = $request->all();
        $data = Task::create($requestData);
        $data->save();

        return to_route('tasks.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Task $task)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Task $task, $id)
    {
        $taskList = Task::get(['*', 'id AS key']);
        $task = Task::find($id);
        return Inertia::render('Tasks/CreateTask', [
            'taskList' => $taskList,
            'record' => $task
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Task $task, $id)
    {
        //dd($request);
        $lead = Task::find($id);
        $requestData = $request->all();
        $updated = $lead->update($requestData);
        return to_route('tasks.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task, $id)
    {
        Task::find($id)->delete();
        return to_route('tasks.index');
    }

    // Duration management
    public function duration(Request $request,  Task $businesslead, $id)
    {
        $taskDurationList = Taskduration::get(['*', 'id AS key']);
        $taskList = Task::get(['*', 'id AS key']);
        $task = Task::find($id);
        return Inertia::render('Tasks/TaskDuration', [
            'taskList' => $taskList,
            'record' => $task,
            'taskDurationList' => $taskDurationList,
        ]);
    }

    //store activity of leads in database
    public function storeduration(Request $request)
    {
        //dd($request);
        $requestData = $request->all();
        $data = Taskduration::create($requestData);
        $data->save();
        return to_route('tasks.index');
    }
}