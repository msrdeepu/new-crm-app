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
            ->join('employees', 'contacts.id', '=', 'employees.contact_id')
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
        $employeList = Employee::get(['*', 'id AS key']);
        $employee = Employee::find($id);
        return Inertia::render('Employes/CreateEmploye', [
            'employeList' => $employeList,
            'record' => $employee

        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Employee $employee, $id)
    {
        //dd($request);

        $emp = Employee::find($id);
        dd($emp);
        $emp->dob = $request->query('dob');
        $emp->marstatus = $request->query('marstatus');
        $emp->bloodgroup = $request->query('bloodgroup');
        $emp->update();

        //bulk assign
        // $requestData = $request->all();
        // $emp->update($requestData);

        return to_route('employees.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Employee $employee, $id)
    {
        Employee::find($id)->delete();
        return to_route('employees.index');
    }
}
