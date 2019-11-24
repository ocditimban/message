# message

<h3>
    <a id="user-content-setup" class="anchor" aria-hidden="true" href="#setup"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Setup</h3>

<blockquote>
<p>run docker-compose</p>
</blockquote>
<div class="highlight highlight-source-shell">
<pre>
$ docker-compose up -d
</pre>
</div>
<blockquote>
<p>go to the site on browser</p>
</blockquote>

<div class="highlight highlight-source-shell"><pre>
http://localhost:85</pre></div>

<blockquote>
<p>login database via adminer</p>
</blockquote>
<div class="highlight highlight-source-shell"><pre>
localhost:85/public/adminer.php</pre></div>

<blockquote>
<p>type the info into adminer</p>
</blockquote>
<div class="highlight highlight-source-shell"><pre>
Server: db
User: admin
Password: root
Database: message
</pre></div>
<blockquote>
<p>import mysqlDB from /config/structure_database.sql file</p>
</blockquote>
<blockquote>
<p>Info of admin: (UserName: admin | password: Phuongbui88)</p>
</blockquote>



<hr>