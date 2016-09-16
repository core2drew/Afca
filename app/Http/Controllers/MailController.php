<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use Mail;

class MailController extends Controller
{

	public function sendInquiry(Request $request) {
		$fullname = $request->get('fullname');
		$email = $request->get('email');
		$subject =$request->get('subject');
		$bodyMessage = $request->get('message');

		Mail::send('emails.inquiry', compact('fullname','email','subject','bodyMessage'), function ($msg) {
			$msg->subject('Inquiry');
			$msg->from('afca@gmail.com', 'AFCA Inquiry Form (Do not reply)');
			$msg->to("abrahamsflock@gmail.com");
		});
	}

}
