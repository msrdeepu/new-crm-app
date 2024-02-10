<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use App\Models\Dashboard;
use App\Models\Contact;
use App\Models\Businesslead;
use App\Models\Project;
use App\Models\Employee;
use Illuminate\Support\Facades\Storage;
use App\Models\Setting;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $clientData = DB::table('contacts')->where('contype', 'client')->get();
        $studentData = DB::table('contacts')->where('contype', 'student')->get();
        $employeeData = DB::table('contacts')->where('contype', 'employee')->get();
        $projectData = DB::table('projects')->get();
        $leadData = DB::table('businessleads')->get();
        $latestProjects = $projectData->slice(-5)->values();
        $latestLeads = $leadData->slice(-5)->values();
        $clientCount = count($clientData);
        $studentCount = count($studentData);
        $empCount = count($employeeData);
        $projectCount = count($projectData);

        //dd($latestLeads);

        return Inertia::render('Dashboard', [
            'clientCount' => $clientCount,
            'studentCount' => $studentCount,
            'empCount' => $empCount,
            'projectCount' => $projectCount,
            'latestProjects' => $latestProjects,
            'latestLeads' => $latestLeads,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Dashboard $dashboard)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Dashboard $dashboard)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Dashboard $dashboard)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Dashboard $dashboard)
    {
        //
    }
}