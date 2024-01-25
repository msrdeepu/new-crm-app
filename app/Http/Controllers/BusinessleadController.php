<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Contact;
use Illuminate\Support\Facades\Storage;
use App\Models\Setting;
use App\Models\Businesslead;
use Illuminate\Http\Request;

class BusinessleadController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $leadList = Businesslead::get(['*', 'id AS key']);
        return Inertia::render('BusinessLeads/LeadList', [
            'leadList' => $leadList,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('BusinessLeads/CreateLead', [
            'record' => new Contact(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //dd($request);
        $requestData = $request->all();
        $data = Businesslead::create($requestData);
        $data->save();

        return to_route('leads.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Businesslead $businesslead)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Businesslead $businesslead)
    {
        return Inertia::render('BusinessLeads/CreateLead');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Businesslead $businesslead)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Businesslead $businesslead, $id)
    {
        Businesslead::find($id)->delete();
        return to_route('leads.index');
    }
}
