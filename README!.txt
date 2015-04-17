Running the Application on a Server

An AngularJS application can be served from any standard web server. Below are instructions for standing up the sample application on a few of the more popular web servers. You'll need to have at least one web server installed and running to serve the app!


http-server - OPTION #1
-----------

http-server is a node.js package that provides a simple javascript web server. It will automatically serve files from the directory that it is run from. You will need to have node.js and npm installed to use http-server.

Instructions:

1. Install http-server globally with npm

	npm install -g http-server

2. Run and verify that http-server has been install successfully

	http-server

You should see output similar to below:

	Starting up http-server, serving ./ on: http://0.0.0.0:8080
	Hit CTRL-C to stop the server

http-sever will serve any document located in the directory that you run http-server in. To run the sample project, navigate to the sampleangularapp/src/main/webapp/ directory and run http-server. Then in your browser enter the url http://localhost:8080/index.html to view the home page!


Apache HTTP Server
------------------

Apache HTTP Server (AKA httpd) is the most widely used web server in the world. Also, if you use the default installation settings it's a pretty simple install.

Windows Instructions:

1. Download the latest binary version of httpd from one of Apache's popular distribution sites listed at http://httpd.apache.org/docs/current/platform/windows.html#down (or if you're feeling ambitious, compile it from source). When you unzip the downloaded file or compile from source, you should see a number of directories inside the Apache root directory, including /bin and /htdocs.

2. From the command line, navigate to /bin and run httpd.exe.

3. Place the contents of /sampleangularapp/src/main/webapp into the /htdocs directory (replace the default index.html file).

Now you should be able to navigate to localhost:80 in your browser and see the sample app.


Linux Instructions:

If you're using linux, you should be able to install Apache httpd using a package manager such as yum or apt-get:

	yum install httpd
	apt-get install apache2

You can also always install and compile from source: http://httpd.apache.org/docs/2.4/install.html

Once installed, you should be able to run httpd as a service:

	service httpd start

The default file location for serving files from httpd on Linux is /var/www/html under RHEL / CentOS / Fedora, or /var/www for Debian and Ubuntu.


SimpleHTTPServer
----------------

If you have python installed, then you already have an HTTP server! Python comes with a simple HTTP server module called SimpleHTTPServer.

To run it using Python 2:

	python -m SimpleHTTPServer

To run it using Python 3:

	python -m http.server

Run this in the directory that you'd like to serve files from. For the sample app, run in the /sampleangularapp/src/main/webapp directory ahd hit localhost:8000 to access the application.

You can change the port by entering it after the module name:

	python -m SimpleHTTPServer 1234

