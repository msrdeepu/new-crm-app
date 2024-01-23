<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Contact;
use App\Models\ContactDetails;
use App\Models\Setting;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Contacts/ContactsList');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $contactType = Setting::where('type', '=', 'contact',)->where('status', '=', 'active')->get(['name AS label', 'value', 'id AS key']);
        $country = Setting::where('type', '=', 'country',)->where('status', '=', 'active')->get(['name AS label', 'value', 'id AS key']);
        return Inertia::render('Contacts/CreateContact', [
            'record' => new Contact(),
            'contactType' => $contactType,
            'country' => $country,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        // ctype: "",
        // contactid: contid,
        // title: "",
        // fullname: "",
        // designation: "",
        // company: "",
        // pannumber: "",
        // gstnumber: "",
        // phone: "",
        // mobilenum: "",
        // altcontact: "",
        // wpnumber: "",
        // emailid: "",
        // altemailid: "",
        // weburl: "",
        // city: "",
        // country: "",
        // billaddress: "",
        // avatar: "",
        // status: "",
        // houseaddress: "",
        // officeaddress: "",
        // perminantaddress: "",
        // bankdetails: "",
        //dd($request);
        $avatar = null;
        $requestData = $request->all();

        if ($request->file('avatar')) {
            $avatar = $request->file('avatar')->store('contacts', 'public');
            $requestData['avatar'] = $avatar;
        }

        $contact = Contact::create([
            'contactid' => $request->input('contactid'),
            'fullname' => $request->input('fullname'),
            'age' => $request->input('age'),
            'contype' => $request->input('contype'),
            'role' => $request->input('role'),
            'company' => $request->input('company'),
            'companycode' => $request->input('companycode'),

        ]);

        $contact->ContactDetails()->create([
            'contactid' => $request->input('contact_id'),
            'title' => $request->input('title'),
            // other contact details fields
        ]);
        // $data->save();

        return to_route('contacts.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Contact $contact)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Contact $contact)
    {
        return Inertia::render('Contacts/CreateContact');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Contact $contact)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Contact $contact)
    {
        //
    }
}
