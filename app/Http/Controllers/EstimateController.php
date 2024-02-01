<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Estimate;
use Illuminate\Http\Request;
use App\Models\Setting;

class EstimateController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Estimates/EstimateList');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $discount = Setting::where('type', '=', 'discount',)->where('status', '=', 'active')->get(['name AS label', 'value', 'id AS key']);
        $taxMode = Setting::where('type', '=', 'taxmode',)->where('status', '=', 'active')->get(['name AS label', 'value', 'id AS key']);
        return Inertia::render('Estimates/CreateEstimate', [
            'discount' => $discount,
            'taxMode' => $taxMode
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        dd($request);
    }

    /**
     * Display the specified resource.
     */
    public function show(Estimate $estimate)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Estimate $estimate)
    {
        return Inertia::render('Estimates/CreateEstimate');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Estimate $estimate)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Estimate $estimate)
    {
        //
    }
}