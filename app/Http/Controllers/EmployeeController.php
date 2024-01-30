<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use App\Models\Employee;
use App\Models\Contact;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $empData = DB::table('contacts')->where('contype', 'employee')
            ->join('employees', 'contacts.id', '=', 'employees.empId')
            ->select('contacts.*', 'employees.*')->get();

        return Inertia::render('Employes/EmployeList', [
            'mainData' => $empData,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        return Inertia::render('Employes/CreateEmploye');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        //dd($request);
        $requestData = $request->all();
        $data = Employee::create($requestData);
        $data->save();

        return to_route('employees.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Employee $employee)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Employee $employee, $id)
    {

        return Inertia::render('Employes/InfoEdit');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Employee $employee, $id)
    {

        return to_route('employes.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Employee $employee, $id)
    {
        Employee::find($id)->delete();
        return to_route('employes.index');
    }
}
