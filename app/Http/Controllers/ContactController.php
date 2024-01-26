<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Contact;
use Illuminate\Support\Facades\Storage;
use App\Models\Setting;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $contactList = Contact::get(['*', 'id AS key']);
        return Inertia::render('Contacts/ContactsList', [
            'contactList' => $contactList
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $contactType = Setting::where('type', '=', 'contact',)->where('status', '=', 'active')->get(['name AS label', 'value', 'id AS key']);
        $country = Setting::where('type', '=', 'country',)->where('status', '=', 'active')->get(['name AS label', 'value', 'id AS key']);
        $feminine = Setting::where('type', '=', 'feminine',)->where('status', '=', 'active')->get(['name AS label', 'value', 'id AS key']);
        $contactStatus = Setting::where('type', '=', 'contact-status',)->where('status', '=', 'active')->get(['name AS label', 'value', 'id AS key']);
        $billingAddress = Setting::where('type', '=', 'billing-address',)->where('status', '=', 'active')->get(['name AS label', 'value', 'id AS key']);
        return Inertia::render('Contacts/CreateContact', [
            'record' => new Contact(),
            'contactType' => $contactType,
            'country' => $country,
            'feminine' => $feminine,
            'contactStatus' => $contactStatus,
            'billingAddress' => $billingAddress
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        //dd($request);
        $avatar = null;
        $requestData = $request->all();

        if ($request->file('avatar')) {
            $avatar = $request->file('avatar')->store('contacts', 'public');
            $requestData['avatar'] = $avatar;
        }

        $data = Contact::create($requestData);
        $data->save();

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
    public function edit(Contact $contact, $id)
    {
        $contactList = Contact::get(['*', 'id AS key']);
        $contact = Contact::find($id);
        $contactType = Setting::where('type', '=', 'contact',)->where('status', '=', 'active')->get(['name AS label', 'value', 'id AS key']);
        $country = Setting::where('type', '=', 'country',)->where('status', '=', 'active')->get(['name AS label', 'value', 'id AS key']);
        $feminine = Setting::where('type', '=', 'feminine',)->where('status', '=', 'active')->get(['name AS label', 'value', 'id AS key']);
        $contactStatus = Setting::where('type', '=', 'contact-status',)->where('status', '=', 'active')->get(['name AS label', 'value', 'id AS key']);
        $billingAddress = Setting::where('type', '=', 'billing-address',)->where('status', '=', 'active')->get(['name AS label', 'value', 'id AS key']);
        return Inertia::render('Contacts/CreateContact', [
            'contactType' => $contactType,
            'country' => $country,
            'feminine' => $feminine,
            'contactStatus' => $contactStatus,
            'billingAddress' => $billingAddress,
            'contactList' => $contactList,
            'record' => $contact,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Contact $contact, $id)
    {
        //dd($request);
        $contact = Contact::find($id);
        $avatar = null;
        $requestData = $request->all();
        if ($request->file('avatar')) {
            Storage::delete('public' . $contact->avatar);
            $avatar = $request->file('avatar')->store('contacts', 'public');
            $requestData['avatar'] = $avatar;
        }

        $updated = $contact->update($requestData);
        return to_route('contacts.index');
    }

    // delete page assets
    public function deleteasset($id, $asset)
    {
        $contact = Contact::find($id);

        switch ($asset) {
            case ('avatar'):
                Storage::delete('public' . $contact->avatar);
                $contact->update(["avatar" => null]);
                break;
            default:
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Contact $contact, $id)
    {
        $contact = Contact::find($id);

        if ($contact->avatar != "") {
            Storage::delete('public' . $contact->avatar);
        }

        $contact->delete();
    }
}
