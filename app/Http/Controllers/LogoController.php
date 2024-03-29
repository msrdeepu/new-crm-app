<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use App\Models\Logo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

use function Termwind\render;

class LogoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //$resource = Logo::get(['*', 'logoId as key']);
        //$logoList = Logo::get(['logoId','logoFile', 'logoPosition', 'logoHeight','logoWidth','logoMargin','logoId AS key']);
        $logoFile = Logo::where('logoStatus', '=', 'Active')->pluck('logoFile');
        return Inertia::render('Settings/LogoSettings/LogoList', [
            'logoFileList' => $logoFile,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $user = Auth::user();
        return Inertia::render('Settings/LogoSettings/CreateLogo', [
            'user' => $user,
            'record' => new Logo(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //dd($request);
        $logo = null;
        $requestData = $request->all();
        if ($request->file('logoFile')) {
            $logo = $request->file('logoFile')->store('images', 'public');
            $requestData['logoFile'] = $logo;
            //$requestData['logoFile'] = asset($logo);


        }

        $data = Logo::create($requestData);
        $data->save();
        return to_route('logo.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Logo $logo)
    {
        // return DB::table('logos')->where('status', '=', 'Active')->where('logoFile', '!=', '')->get();

        // return Inertia::render('Components/LogoItem/LogoItem');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Logo $logo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Logo $logo)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Logo $logo)
    {
        //
    }
}