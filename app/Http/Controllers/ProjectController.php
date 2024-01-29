<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $projectList = Project::get(['*', 'id AS key']);
        return Inertia::render('Projects/ProjectsList', [
            'projectList' => $projectList,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Projects/CreateProject', [
            'record' => new Project(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //dd($request);
        $requestData = $request->all();
        $data = Project::create($requestData);
        $data->save();

        return to_route('projects.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Project $project)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Project $project, $id)
    {
        $projectList = Project::get(['*', 'id AS key']);
        $project = Project::find($id);
        return Inertia::render('Projects/CreateProject', [
            'leadList' => $projectList,
            'record' => $project,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Project $project, $id)
    {
        $project = Project::find($id);
        $requestData = $request->all();
        $updated = $project->update($requestData);
        return to_route('projects.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project, $id)
    {
        Project::find($id)->delete();
        return to_route('projects.index');
    }
}
