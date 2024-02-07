<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Invoice;
use App\Models\Setting;
use Illuminate\Http\Request;

class InvoiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Invoices/InvoiceList');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        $discount = Setting::where('type', '=', 'discount',)->where('status', '=', 'active')->get(['name AS label', 'value', 'id AS key']);
        $taxMode = Setting::where('type', '=', 'taxmode',)->where('status', '=', 'active')->get(['name AS label', 'value', 'id AS key']);
        return Inertia::render('Invoices/CreateInvoice', [
            'discount' => $discount,
            'taxMode' => $taxMode
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $productList = $request['products'];
        $flatDiscount = $request['flatdiscount'];
        $discountPercent = $request['discount'];
        $taxMode = $request['taxmode'];
        $shipCharges = $request['shipcharges'];
        $amountPaid = $request['paidamount'];
        //subtotal calculation
        $subTotal = collect($productList)->pluck('amount')->sum();
        //pushing subtotal to request
        $request->merge(['subtotal' => $subTotal]);

        $taxModeItems = array_map('intval', $taxMode);
        $totalTaxPercent = array_sum($taxModeItems);
        //totalAmount
        if ($flatDiscount == null) {
            $disCountPercentValue = $subTotal * ($discountPercent / 100);
            $totalAmount =  $subTotal - $disCountPercentValue;
        } else {
            $totalAmount = $subTotal - $flatDiscount;
        }
        $totalTaxAmount = $totalAmount * ($totalTaxPercent / 100);
        $grandTotal = $shipCharges + $totalAmount +  $totalTaxAmount;
        $dueAmount = $grandTotal - $amountPaid;
        $ipAddress = $request->ips();
        dd($request);
    }

    /**
     * Display the specified resource.
     */
    public function show(Invoice $invoice)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Invoice $invoice)
    {
        return Inertia::render('Invoices/CreateInvoice');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Invoice $invoice)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Invoice $invoice)
    {
        //
    }
}