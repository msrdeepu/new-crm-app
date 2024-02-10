<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Setting;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SettingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $resource = Setting::get(['*', 'id AS key']);
        return Inertia::render('Settings/Settinglist', [
            'resource' => $resource,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $settingList = Setting::where('type', '=', 'setting',)->where('status', '=', 'active')->get(['name AS label', 'value', 'id AS key']);
        // dd($settingList);
        return Inertia::render('Settings/CreateSettings', [
            'record' => new Setting(),
            'settingList' => $settingList

        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //dd($request);
        $requestData = $request->all();
        $data = Setting::create($requestData);
        $data->save();

        return to_route('settings.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Setting $setting)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Setting $setting, $id)
    {
        $settingList = Setting::where('type', '=', 'setting',)->where('status', '=', 'active')->get(['name AS label', 'value', 'id AS key']);
        $user = Auth::user();
        $settings = Setting::get(['id', 'type', 'name', 'value', 'pcode', 'dorder', 'status']);
        $setting = Setting::find($id);
        return Inertia::render('Settings/CreateSettings', [
            'user' => $user,
            'settingsList' => $settings,
            'record' => $setting,
            'settingList' => $settingList,

        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Setting $setting, $id)
    {
        $setting = Setting::find($id);
        $requestData = $request->all();
        $updated = $setting->update($requestData);
        return to_route('settings.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Setting $setting, $id)
    {
        Setting::find($id)->delete();
        return to_route('settings.index');
    }
}