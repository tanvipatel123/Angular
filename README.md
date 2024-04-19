RR# 01Basic

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help`
---------------------------------------------
calculator......
package com.example.mca_application

import android.annotation.SuppressLint
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Toast
import com.example.mca_application.databinding.ActivityCalculatorBinding

class CalculatorActivity : AppCompatActivity() {
    private lateinit var binding: ActivityCalculatorBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        binding = ActivityCalculatorBinding.inflate(layoutInflater)
        setContentView(binding.root)

        binding.btnPlus.setOnClickListener {
            performOperation("+")
        }

        binding.btnMinus.setOnClickListener {
            performOperation("-")
        }

        binding.btnMuliply.setOnClickListener {
            performOperation("*")
        }

        binding.btnDivide.setOnClickListener {
            performOperation("/")
        }
    }

    private fun performOperation(operator: String) {
        binding.txtAns.text = ""

        val num1 = binding.edtNo1.text.toString().toDoubleOrNull()
        val num2 = binding.edtNo2.text.toString().toDoubleOrNull()

        if (num1 != null && num2 != null) {
            val result = when (operator) {

                "+" -> num1 + num2
                "-" -> num1 - num2
                "*" -> num1 * num2
                "/" -> {
                    if (num2 != 0.0) num1 / num2
                    else {
                        Toast.makeText(this, "Cannot divide by zero", Toast.LENGTH_LONG).show()
                        return
                    }
                }
                else -> {
                    Toast.makeText(this, "Invalid operator", Toast.LENGTH_LONG).show()
                    return
                }
            }

            binding.txtAns.text = result.toString()
        }

        else {
            Toast.makeText(this, "Please enter valid values", Toast.LENGTH_LONG).show()
        }
    }
}
calculater
----------------------------------
call activity.......
package com.example.mca_application

import android.Manifest
import android.content.Intent
import android.content.pm.PackageManager
import android.net.Uri
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import com.example.mca_application.databinding.ActivityCalBinding

class CalActivity : AppCompatActivity() {
    private lateinit var rBinding: ActivityCalBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        rBinding = ActivityCalBinding.inflate(layoutInflater)
        setContentView(rBinding.root)

        // Request CALL_PHONE permission if not granted
        if (ContextCompat.checkSelfPermission(this, Manifest.permission.CALL_PHONE)
            != PackageManager.PERMISSION_GRANTED
        ) {
            ActivityCompat.requestPermissions(
                this,
                arrayOf(Manifest.permission.CALL_PHONE),
                123 // Request code
            )
        }

        rBinding.btncal.setOnClickListener {
            val phoneNumber = "9328963826"
            val intent = Intent(Intent.ACTION_CALL, Uri.parse("tel:$phoneNumber"))
            startActivity(intent)
        }
    }
}
call activity
-----------------------------------------------
thread program......
package com.example.mca_application

import android.graphics.Color
import android.os.Bundle
import android.widget.Toast
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import com.example.mca_application.databinding.ActivityTreaddemoBinding
import kotlin.concurrent.thread

class TreaddemoActivity : AppCompatActivity() {

    private lateinit var cbinding: ActivityTreaddemoBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        cbinding = ActivityTreaddemoBinding.inflate(layoutInflater)
        setContentView(cbinding.root)




        changebackground()

    }

    private fun changebackground()
    {
        Thread(Runnable {


            for (i in 50 downTo 0)
            {
                runOnUiThread({
                    cbinding.txtCount.text=i.toString()
//                    Toast.makeText(this,i.toString(),Toast.LENGTH_SHORT).show()

                    if (i% 2 ==0)
                    {
                        cbinding.llView.setBackgroundColor(Color.alpha(R.color.black))
                    }else{
                        cbinding.llView.setBackgroundColor(Color.YELLOW)
                    }
                })
                Thread.sleep(1000)//1

            }

        }).start()
    }

}



thread demo
--------------+---------------
login.....
package com.example.mca_application

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.Toast
import com.example.mca_application.databinding.ActivityLoginBinding

class LoginActivity : AppCompatActivity() {
    private lateinit var binding: ActivityLoginBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityLoginBinding.inflate(layoutInflater)
        setContentView(binding.root)

        binding.BtnForgotpass.setOnClickListener {
            startActivity(Intent(this@LoginActivity, ForgotPasswordActivity::class.java))
        }

        binding.BtnClick.setOnClickListener {
            // Get email and password from EditText fields
            val email = binding.edtEmail.text.toString()
            val password = binding.edtPassword.text.toString()

            // Here, you can add your authentication logic
            // For simplicity, let's assume it's successful for any non-empty email and password
            if (email.isNotEmpty() && password.isNotEmpty()) {
                // Start the HomeActivity and pass email and password as extras
                startActivity(
                    Intent(this@LoginActivity, homeActivity::class.java)
//                        .putExtra("EMAIL", email)
//                        .putExtra("PASS", password)
                        .putExtra("EMAIL",binding.edtEmail.text.toString()!!)
                         .putExtra("PASS",binding.edtPassword.text.toString()!!))
//                        .putExtra("EMAIL", "abc@gmail.com")
//                        .putExtra("PASS", "123456789"))


                // Log the email (optional)
                Log.d("EMAIL", email)
                // Finish the activity (optional)
                finish()

                // Display a toast message for successful login
                Toast.makeText(this@LoginActivity, "Login Successful", Toast.LENGTH_SHORT).show()
            } else {
                // Display a toast message for invalid login
                Toast.makeText(this@LoginActivity, "Please enter valid credentials", Toast.LENGTH_SHORT).show()
            }
        }

        binding.BtnForgotpass.setOnClickListener {
            startActivity(Intent(this@LoginActivity, ForgotPasswordActivity::class.java))
        }
    }
}
login
--------------------------------------------
forgot pass.....
package com.example.mca_application

import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.example.mca_application.databinding.ActivityForgotPasswordBinding

class ForgotPasswordActivity : AppCompatActivity() {

    private lateinit var fBinding : ActivityForgotPasswordBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        fBinding = ActivityForgotPasswordBinding.inflate(layoutInflater)
        setContentView(fBinding.root)


        fBinding.BtnClick.setOnClickListener {
            if(fBinding.edtEmail.text.toString().trim().isEmpty())
            {
                Toast.makeText(this,"Please enter email...!",Toast.LENGTH_SHORT).show()
            }else{
                val intent = Intent(Intent.ACTION_SENDTO, Uri.fromParts("mailto","dasshreya755@gmail.com",null))
                startActivity(Intent.createChooser(intent,"Hello"))
            }


        }
    }
}forgot password
--------------------------------------------------
home........
package com.example.mca_application

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.LayoutInflater
import com.example.mca_application.databinding.ActivityHomeBinding

class homeActivity : AppCompatActivity() {

    private lateinit var binding:ActivityHomeBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        binding = ActivityHomeBinding.inflate(getLayoutInflater());
        setContentView(binding.getRoot());

        binding.txtEmail.text=intent.getStringExtra("EMAIL")
        binding.txtPass.text=intent.getStringExtra("PASS")

    }
}home acitivty
--------------------------------------------------
register......
package com.example.mca_application

import android.content.Intent
import android.graphics.Bitmap
import android.os.Bundle
import android.provider.MediaStore
import androidx.appcompat.app.AppCompatActivity
import android.widget.Toast
import com.example.mca_application.databinding.ActivityRegisterBinding

class RegisterActivity : AppCompatActivity() {
    private lateinit var rBinding: ActivityRegisterBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

       // setContentView(R.layout.activity_register)

        rBinding=ActivityRegisterBinding.inflate(layoutInflater)
        setContentView(rBinding.root)

        rBinding.btnSubmit.isEnabled=false

        rBinding.chkTermsCondition.setOnCheckedChangeListener{_, isChecked ->
            if (isChecked==true)
            {
                rBinding.btnSubmit.isEnabled=true
            }
            else
            {
                rBinding.btnSubmit.isEnabled=false
            }
        }

        rBinding.imgProfile.setOnClickListener{
            var intent=Intent(MediaStore.ACTION_IMAGE_CAPTURE)
            startActivityForResult(intent,123)
        }
    }

    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)
        if (requestCode==123)
        {
            rBinding.imgProfile.setImageBitmap(data!!.extras!!.get("data")as Bitmap)
        }
    }
} register
-------------------------------------------------
song.....
package com.example.mca_application

import android.media.MediaPlayer
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.example.mca_application.databinding.ActivitySongBinding

class SongActivity : AppCompatActivity() {
    private lateinit var mBinding : ActivitySongBinding
    private var isPlay: Boolean = false
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        mBinding=ActivitySongBinding.inflate(layoutInflater)
        setContentView(mBinding.root)

        var mPlayer= MediaPlayer.create(applicationContext ,R.raw.song)

        mPlayer.isLooping=true

        mBinding.txtTime.text=mPlayer.duration.toString()

        mBinding.btnpause.setOnClickListener{
            if (isPlay==true)
            {
                mPlayer.pause()
                mBinding.btnpause.text="Play"
                isPlay=false

            }
            else
            {
                mPlayer.start()
                isPlay=true
                mBinding.btnpause.text="Pause"
            }
        }
        mBinding.btnstop.setOnClickListener{
            mPlayer.stop()
            mPlayer.prepare()
        }


    }} song
------------------------------------------------
splash screen ......
package com.example.mca_application

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.os.Handler

class SplashActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_splash)

        Handler().postDelayed(Runnable {
            startActivity(Intent(this@SplashActivity,LoginActivity::class.java))
            finish()
        },3000)


    }
} splash screen
-----------------------------------------------
call list .....
package com.example.mca_application

import android.database.Cursor
import android.os.Bundle
import android.provider.ContactsContract
import android.telecom.Call
import android.widget.SimpleAdapter
import android.widget.SimpleCursorAdapter
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import com.example.mca_application.databinding.ActivityCallListBinding
import com.example.mca_application.databinding.ActivityForgotPasswordBinding

class CallListActivity : AppCompatActivity() {

    private lateinit var cBinding : ActivityCallListBinding
    var isplay = false
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        cBinding = ActivityCallListBinding.inflate(layoutInflater)
        setContentView(cBinding.root)

        readCallList()

        }
    private fun readCallList() {
        var cursor : Cursor = contentResolver.query(
            ContactsContract.CommonDataKinds.Phone.CONTENT_URI,
            null,null,null,null
        )!!

        var  from = arrayOf(ContactsContract.CommonDataKinds.Phone.DISPLAY_NAME)

        var  ContectNo = intArrayOf(android.R.id.text1)

        var simpleAdapter:SimpleCursorAdapter =
            SimpleCursorAdapter(this,android.R.layout.simple_list_item_1,cursor,from,ContectNo)

        cBinding.scontact.adapter = simpleAdapter
    }
    }
callllist
--------------------------------------
