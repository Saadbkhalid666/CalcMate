from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.core.mail import send_mail
from datetime import datetime

@csrf_exempt
def Contact(req):
    if req.method == 'POST':
        try:
            name = req.POST.get('name')
            email = req.POST.get('email')
            subj = req.POST.get('subject')
            message = req.POST.get('message')

            if not name or not email or not subj or not message:
                return JsonResponse({'status': "Error", "message": "Missing fields"}, status=400)

            subject = f'New Contact Form Submission from {name}'
            message_body = f'Name: {name}\nEmail: {email}\nSubject: {subj}\nMessage: {message}'

            html_message = f"""
            <html>
            <body style="font-family: Arial, sans-serif; background-color: #ffffff; padding: 30px; color: #333;">
                <div style="max-width: 600px; margin: auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);">
                    <div style="background-color: #3190ce; color: white; padding: 20px;">
                        <h2 style="margin: 0;">📬 New Message from CalcMate</h2>
                    </div>
                    <div style="padding: 20px;">
                        <p><strong>Name:</strong> {name}</p>
                        <p><strong>Email:</strong> {email}</p>
                        <p><strong>Subject:</strong> {subj}</p>
                        <p><strong>Message:</strong><br>{message}</p>
                    </div>
                    <div style="background-color: #f2f2f2; padding: 15px; text-align: center; font-size: 13px; color: #999;">
                        © {datetime.now().year} CalcMate. All rights reserved.
                    </div>
                </div>
            </body>
            </html>
            """

            send_mail(
                subject,
                message_body,
                'daimtools2025@gmail.com',
                ['daimtools2025@gmail.com'],
                fail_silently=False,
                html_message=html_message
            )

            return JsonResponse({'status': "Success", "message": "Email Sent Successfully"}, status=200)

        except Exception as e:
            print("Error:", e)
            return JsonResponse({'status': "Error", 'message': str(e)}, status=500)

    return JsonResponse({'status': "Error", 'message': "Invalid Request Method"}, status=405)
