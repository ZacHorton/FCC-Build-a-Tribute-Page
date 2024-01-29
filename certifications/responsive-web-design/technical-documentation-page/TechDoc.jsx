import "./styles.css";

export function TechDoc() {
  return (
    <div className="techDocContainer">
      <nav id="navbar">
        <header>Python Documentation</header>
        <ul>
          <li>
            <a className="nav-link" href="#introduction">
              Introduction
            </a>
          </li>
          <li>
            <a className="nav-link" href="#comments">
              Comments
            </a>
          </li>
          <li>
            <a className="nav-link" href="#variables">
              Variables
            </a>
          </li>
          <li>
            <a className="nav-link" href="#data_types">
              Data Types
            </a>
          </li>
          <li>
            <a className="nav-link" href="#numbers">
              Numbers
            </a>
          </li>
          <li>
            <a className="nav-link" href="#casting">
              Casting
            </a>
          </li>
          <li>
            <a className="nav-link" href="#strings">
              Strings
            </a>
          </li>
          <li>
            <a className="nav-link" href="#slicing_strings">
              Slicing Strings
            </a>
          </li>
          <li>
            <a className="nav-link" href="#booleans">
              Booleans
            </a>
          </li>
          <li>
            <a className="nav-link" href="#operators">
              Operators
            </a>
          </li>
          <li>
            <a className="nav-link" href="#lists">
              Lists
            </a>
          </li>
          <li>
            <a className="nav-link" href="#tuples">
              Tuples
            </a>
          </li>
          <li>
            <a className="nav-link" href="#sets">
              Sets
            </a>
          </li>
          <li>
            <a className="nav-link" href="#dictionaries">
              Dictionaries
            </a>
          </li>
          <li>
            <a className="nav-link" href="#reference">
              Reference
            </a>
          </li>
        </ul>
      </nav>
      <main id="main-doc">
        <section className="main-section" id="introduction">
          <header>Introduction</header>
          <hr />
          <article>
            <h2>What is Python?</h2>
            <p>
              Python is a popular programming language. It was created by Guido
              van Rossum, and released in 1991.
              <br />
              It is used for:
            </p>
            <ul>
              <li>web development (server-side),</li>
              <li>software development,</li>
              <li>mathematics,</li>
              <li>system scripting.</li>
            </ul>
            <h3>What can Python do?</h3>
            <ul>
              <li>
                Python can be used on a server to create web applications.
              </li>
              <li>
                Python can be used alongside software to create workflows.
              </li>
              <li>
                Python can connect to database systems. It can also read and
                modify files.
              </li>
              <li>
                Python can be used to handle big data and perform complex
                mathematics.
              </li>
              <li>
                Python can be used for rapid prototyping, or for
                production-ready software development.
              </li>
            </ul>
            <h3>Why Python?</h3>
            <ul>
              <li>
                Python works on different platforms (Windows, Mac, Linux,
                Raspberry Pi, etc).
              </li>
              <li>
                Python has a simple syntax similar to the English language.
              </li>
              <li>
                Python has syntax that allows developers to write programs with
                fewer lines than some other programming languages.
              </li>
              <li>
                Python runs on an interpreter system, meaning that code can be
                executed as soon as it is written. This means that prototyping
                can be very quick.
              </li>
              <li>
                Python can be treated in a procedural way, an object-oriented
                way or a functional way.
              </li>
            </ul>
          </article>
        </section>
        <section className="main-section" id="comments">
          <header>Comments</header>
          <hr />
          <article>
            <p>
              Comments can be used to explain Python code.
              <br />
              Comments can be used to make the code more readable.
              <br />
              Comments can be used to prevent execution when testing code.
            </p>
            <h2>Creating a Comment</h2>
            <p>
              Comments starts with a <span className="crimson">#</span>, and
              Python will ignore them:
            </p>
            <code>
              <span className="green">#This is a comment</span>
              <br />
              <span className="blue">print</span>(
              <span className="brown">Hello, World!"</span>)
            </code>
            <p>
              Comments can be placed at the end of a line, and Python will
              ignore the rest of the line:
            </p>
            <code>
              <span className="blue">print</span>(
              <span className="brown">"Hello, World!"</span>){" "}
              <span className="green">#This is a comment</span>
            </code>
            <p>
              A comment does not have to be text that explains the code, it can
              also be used to prevent Python from executing code:
            </p>
            <code>
              <span className="green">#print("Hello, World!")</span>
              <br />
              <span className="blue">print</span>(
              <span className="brown">"Cheers, Mate!"</span>)
            </code>
            <h2>Multi Line Comments</h2>
            <p>
              Python does not really have a syntax for multi line comments. To
              add a multiline comment you could insert a{" "}
              <span className="crimson">#</span> for each line:
            </p>
            <code>
              <span className="green">
                #This is a comment
                <br />
                #written in
                <br />
                #more than just one line
                <br />
              </span>
              <span className="blue">print</span>(
              <span className="brown">Hello, World!"</span>)
            </code>
            <p>
              Or, not quite as intended, you can use a multiline string. Since
              Python will ignore string literals that are not assigned to a
              variable, you can add a multiline string (triple quotes) in your
              code, and place your comment inside it:
            </p>
            <code>
              <span className="green">
                """
                <br />
                This is a comment
                <br />
                written in
                <br />
                more than just one line
                <br />
                """
                <br />
              </span>
              <span className="blue">print</span>(
              <span className="brown">Hello, World!"</span>)
            </code>
            <p>
              As long as the string is not assigned to a variable, Python will
              read the code, but then ignore it, and you have made a multiline
              comment.
            </p>
          </article>
        </section>
        <section className="main-section" id="variables">
          <header>Variables</header>
          <hr />
          <article>
            <h2>Variables</h2>
            <p>Variables are containers for storing data values.</p>
            <h3>Creating Variables</h3>
            <p>
              Python has no command for declaring a variable.
              <br />A variable is created the moment you first assign a value to
              it.
            </p>
            <code>
              x = <span className="red">5</span>
              <br />y = <span className="brown">"John"</span>
              <br />
              <span className="blue">print</span>(x)
              <br />
              <span className="blue">print</span>(y)
              <br />
            </code>
            <p>
              Variables do not need to be declared with any particular type, and
              can even change type after they have been set.
            </p>
            <code>
              x = <span className="red">4</span>{" "}
              <span className="green">
                # x is of type int
                <br />
              </span>
              x = <span className="brown">"Sally"</span>{" "}
              <span className="green">
                # x is now of type str
                <br />
              </span>
              <span className="blue">print</span>(x)
            </code>
            <h3>Casting</h3>
            <p>
              If you want to specify the data type of a variable, this can be
              done with casting.
            </p>
            <code>
              x = <span className="blue">str</span>(
              <span className="red">3</span>){" "}
              <span className="green">
                # x will be '3'
                <br />
              </span>
              y = <span className="blue">int</span>(
              <span className="red">3</span>){" "}
              <span className="green">
                # y will be 3<br />
              </span>
              z = <span className="blue">float</span>(
              <span className="red">3</span>){" "}
              <span className="green"># z will be 3.0</span>
            </code>
            <h3>Get the Type</h3>
            <code>
              x = <span className="red">5</span>
              <br />y = <span className="brown">"John"</span>
              <br />
              <span className="blue">print</span>(
              <span className="blue">type</span>(x))
              <br />
              <span className="blue">print</span>(
              <span className="blue">type</span>(y))
            </code>
            <h3>Single or Double Quotes?</h3>
            <p>
              String variables can be declared either by using single or double
              quotes:
            </p>
            <code>
              x = <span className="brown">"John"</span>
              <br />
              <span className="green"># is the same as</span>
              <br />x = <span className="brown">'John'</span>
            </code>
            <h3>Case-Sensitive</h3>
            <p>Variable names are case-sensitive.</p>
            <code>
              a = <span className="red">4</span>
              <br />A = <span className="brown">"Sally"</span>
              <br />
              <span className="green">#A will not overwrite a</span>
            </code>
          </article>
        </section>
        <section className="main-section" id="data_types">
          <header>Data Types</header>
          <hr />
          <article>
            <h2>Built-in Data Types</h2>
            <p>
              In programming, data type is an important concept.
              <br />
              Variables can store data of different types, and different types
              can do different things.
              <br />
              Python has the following data types built-in by default, in these
              categories:
              <br />
              Text Type: <span className="crimson">str</span>
              <br />
              Numeric Types:{" "}
              <span className="crimson">int, float, complex</span>
              <br />
              Sequence Types:{" "}
              <span className="crimson">list, tuple, range</span>
              <br />
              Mapping Type: <span className="crimson">dict</span>
              <br />
              Set Types: <span className="crimson">set, frozenset</span>
              <br />
              Boolean Type: <span className="crimson">bool</span>
              <br />
              Binary Types:{" "}
              <span className="crimson">bytes, bytearray, memoryview</span>
              <br />
              None Type: <span className="crimson">NoneType</span>
            </p>
            <h3>Getting the Data Type</h3>
            <p>
              You can get the data type of any object by using the{" "}
              <span className="crimson">type()</span> function:
            </p>
            <code>
              x = <span className="red">5</span>
              <br />
              <span className="blue">print</span>(
              <span className="blue">type</span>(x))
            </code>
            <h3>Setting the Data Type</h3>
            <p>
              In Python, the data type is set when you assign a value to a
              variable:
            </p>

            <table>
              <thead>
                <tr>
                  <th>Example</th>
                  <th>Data Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>x = "Hello World"</td>
                  <td>str</td>
                </tr>
                <tr>
                  <td>x = 20</td>
                  <td>int</td>
                </tr>
                <tr>
                  <td>x = 20.5</td>
                  <td>float</td>
                </tr>
                <tr>
                  <td>x = 1j</td>
                  <td>complex</td>
                </tr>
                <tr>
                  <td>x = ["apple", "banana", "cherry"]</td>
                  <td>list</td>
                </tr>
                <tr>
                  <td>x = ("apple", "banana", "cherry")</td>
                  <td>tuple</td>
                </tr>
                <tr>
                  <td>x = range(6)</td>
                  <td>range</td>
                </tr>
                <tr>
                  <td>x = {'{"name" : "John", "age" : 36}'}</td>
                  <td>dict</td>
                </tr>
                <tr>
                  <td>x = {'{"apple", "banana", "cherry"}'}</td>
                  <td>set</td>
                </tr>
                <tr>
                  <td>x = frozenset({'{"apple", "banana", "cherry"}'})</td>
                  <td>frozenset</td>
                </tr>
                <tr>
                  <td>x = True</td>
                  <td>bool</td>
                </tr>
                <tr>
                  <td>x = b"Hello"</td>
                  <td>bytes</td>
                </tr>
                <tr>
                  <td>x = bytearray(5)</td>
                  <td>bytearray</td>
                </tr>
                <tr>
                  <td>x = memoryview(bytes(5))</td>
                  <td>memoryview</td>
                </tr>
                <tr>
                  <td>x = None</td>
                  <td>NoneType</td>
                </tr>
              </tbody>
            </table>
            <h3>Setting the Specific Data Type</h3>
            <p>
              If you want to specify the data type, you can use the following
              constructor functions:
            </p>
          </article>
        </section>
        <section className="main-section" id="numbers">
          <header>Numbers</header>
          <hr />
          <article>
            <h2>Python Numbers</h2>

            <p>There are three numeric types in Python:</p>
            <ul>
              <li>
                <span className="crimson">int</span>
              </li>
              <li>
                <span className="crimson">float</span>
              </li>
              <li>
                <span className="crimson">complex</span>
              </li>
            </ul>
            <p>
              Variables of numeric types are created when you assign a value to
              them:
              <br />
              <code>
                x = <span className="red">1</span>{" "}
                <span className="green"># int</span>y ={" "}
                <span className="red">2.8</span>{" "}
                <span className="green"># float</span>z = 1j{" "}
                <span className="green"># complex</span>
              </code>
              To verify the type of any object in Python, use the{" "}
              <span className="crimson">type()</span> function:
              <code>
                {" "}
                <span className="blue">print</span>(
                <span className="blue">type</span>(x))
                <span className="blue">print</span>(
                <span className="blue">type</span>(y))
                <span className="blue">print</span>(
                <span className="blue">type</span>(z))
              </code>
            </p>

            <h3>Int</h3>
            <p>
              Int, or integer, is a whole number, positive or negative, without
              decimals, of unlimited length.
            </p>
            <h3>Float</h3>
            <p>
              Float, or "floating point number" is a number, positive or
              negative, containing one or more decimals.
              <br />
              Float can also be scientific numbers with an "e" to indicate the
              power of 10.
            </p>
            <h3>Complex</h3>
            <p>Complex numbers are written with a "j" as the imaginary part.</p>
            <h3>Type Conversion</h3>
            <p>
              You can convert from one type to another with the{" "}
              <span className="crimson">int()</span>,{" "}
              <span className="crimson">float()</span>, and{" "}
              <span className="crimson">complex()</span> methods.
              <span className="note">
                <strong>Note:</strong> You cannot convert complex numbers into
                another number type.
              </span>
            </p>
            <h3>Random Number</h3>
            <p>
              Python does not have a <span className="crimson">random()</span>{" "}
              function to make a random number, but Python has a built-in module
              called <span className="crimson">random</span> that can be used to
              make random numbers.
            </p>
          </article>
        </section>
        <section className="main-section" id="casting">
          <header>Casting</header>
          <hr />
          <article>
            <h2>Specify a Variable Type</h2>
            <p>
              There may be times when you want to specify a type on to a
              variable. This can be done with casting. Python is an
              object-orientated language, and as such it uses classes to define
              data types, including its primitive types.
            </p>

            <p>
              Casting in python is therefore done using constructor functions:
            </p>
            <br />
            <ul>
              <li>
                <span className="crimson">int()</span> - constructs an integer
                number from an integer literal, a float literal (by removing all
                decimals), or a string literal (providing the string represents
                a whole number)
              </li>
              <li>
                <span className="crimson">float()</span> - constructs a float
                number from an integer literal, a float literal or a string
                literal (providing the string represents a float or an integer)
              </li>
              <li>
                <span className="crimson">str()</span> - constructs a string
                from a wide variety of data types, including strings, integer
                literals and float literals
              </li>
            </ul>

            <code>
              x = <span className="blue">int</span>(
              <span className="red">1</span>){" "}
              <span className="green"># x will be 1</span>y ={" "}
              <span className="blue">int</span>(<span className="red">2.8</span>
              ) <span className="green"># y will be 2</span>z ={" "}
              <span className="blue">int</span>(
              <span className="brown">"3"</span>){" "}
              <span className="green"># z will be 3</span>x ={" "}
              <span className="blue">float</span>(<span className="red">1</span>
              ) <span className="green"># x will be 1.0</span>y ={" "}
              <span className="blue">float</span>(
              <span className="red">2.8</span>){" "}
              <span className="green"># y will be 2.8</span>z ={" "}
              <span className="blue">float</span>(
              <span className="brown">"3"</span>){" "}
              <span className="green"># z will be 3.0</span>w ={" "}
              <span className="blue">float</span>(
              <span className="brown">"4.2"</span>){" "}
              <span className="green"># w will be 4.2</span>x ={" "}
              <span className="blue">str</span>(
              <span className="brown">"s1"</span>){" "}
              <span className="green"># x will be 's1'</span>y ={" "}
              <span className="blue">str</span>(<span className="red">2</span>){" "}
              <span className="green"># y will be '2'</span>z ={" "}
              <span className="blue">str</span>(<span className="red">3.0</span>
              ) <span className="green"># z will be '3.0'</span>
            </code>
          </article>
        </section>
        <section className="main-section" id="strings">
          <header>Strings</header>
          <hr />
          <article>
            <h2>Strings</h2>
            <p>
              Strings in python are surrounded by either single quotation marks,
              or double quotation marks.
              <br />
              <span className="crimson">'hello'</span> is the same as{" "}
              <span className="crimson">"hello"</span>.<br />
              You can display a string literal with the{" "}
              <span className="crimson">print()</span> function:
            </p>
            <h3>Assign String to a Variable</h3>
            <p>
              Assigning a string to a variable is done with the variable name
              followed by an equal sign and the string:
            </p>
            <h3>Multiline Strings</h3>
            <p>
              You can assign a multiline string to a variable by using three
              quotes.
              <span className="note">
                <strong>Note:</strong> in the result, the line breaks are
                inserted at the same position as in the code.
              </span>
            </p>

            <h3>Strings are Arrays</h3>
            <p>
              Like many other popular programming languages, strings in Python
              are arrays of bytes representing unicode characters.
              <br />
              However, Python does not have a character data type, a single
              character is simply a string with a length of 1.
              <br />
              Square brackets can be used to access elements of the string.
            </p>
            <h3>Looping Through a String</h3>
            <p>
              Since strings are arrays, we can loop through the characters in a
              string, with a <span className="crimson">for</span> loop.
            </p>
            <h3>String Length</h3>
            <p>
              To get the length of a string, use the{" "}
              <span className="crimson">len()</span> function.
            </p>
            <h3>Check String</h3>
            <p>
              To check if a certain phrase or character is present in a string,
              we can use the keyword <span className="crimson">in</span>.
            </p>
            <h3>Check if NOT</h3>
            <p>
              To check if a certain phrase or character is NOT present in a
              string, we can use the keyword{" "}
              <span className="crimson">not in</span>.
            </p>
          </article>
        </section>
        <section className="main-section" id="slicing_strings">
          <header>Slicing Strings</header>
          <hr />
          <article>
            <h2>Slicing</h2>
            <p>
              You can return a range of characters by using the slice syntax.
              <br />
              Specify the start index and the end index, separated by a colon,
              to return a part of the string.
            </p>
            <h3>Slice From the Start</h3>
            <p>
              By leaving out the start index, the range will start at the first
              character:
            </p>
            <h3>Slice To the End</h3>
            <p>By leaving out the end index, the range will go to the end:</p>
            <h3>Negative Indexing</h3>
            <p>
              Use negative indexes to start the slice from the end of the
              string:
            </p>
          </article>
        </section>
        <section className="main-section" id="booleans">
          <header>Booleans</header>
          <hr />
          <article>
            <p>
              Booleans represent one of two values:{" "}
              <span className="crimson">True</span> or{" "}
              <span className="crimson">False</span>.
            </p>
            <h2>Boolean Values</h2>
            <p>
              In programming you often need to know if an expression is{" "}
              <span className="crimson">True</span> or{" "}
              <span className="crimson">False</span>.<br />
              You can evaluate any expression in Python, and get one of two
              answers, <span className="crimson">True</span> or{" "}
              <span className="crimson">False</span>.<br />
              When you compare two values, the expression is evaluated and
              Python returns the Boolean answer:
            </p>
            <p>
              When you run a condition in an if statement, Python returns{" "}
              <span className="crimson">True</span> or{" "}
              <span className="crimson">False</span>:
            </p>
            <h3>Evaluate Values and Variables</h3>
            <p>
              The <span className="crimson">bool()</span> function allows you to
              evaluate any value, and give you{" "}
              <span className="crimson">True</span> or{" "}
              <span className="crimson">False</span> in return,
            </p>
            <h3>Most Values are True</h3>
            <p>
              Almost any value is evaluated to{" "}
              <span className="crimson">True</span> if it has some sort of
              content.
              <br />
              Any string is <span className="crimson">True</span>, except empty
              strings.
              <br />
              Any number is <span className="crimson">True</span>, except{" "}
              <span className="crimson">0</span>.<br />
              Any list, tuple, set, and dictionary are{" "}
              <span className="crimson">True</span>, except empty ones.
            </p>
            <h3>Some Values are False</h3>
            <p>
              In fact, there are not many values that evaluate to{" "}
              <span className="crimson">False</span>, except empty values, such
              as <span className="crimson">()</span>,{" "}
              <span className="crimson">[]</span>,{" "}
              <span className="crimson">{}</span>,
              <span className="crimson">""</span>, the number{" "}
              <span className="crimson">0</span>, and the value{" "}
              <span className="crimson">None</span>. And of course the value{" "}
              <span className="crimson">False</span> evaluates to{" "}
              <span className="crimson">False</span>.
            </p>
            <h3>Functions can Return a Boolean</h3>
            <p>You can create functions that returns a Boolean Value:</p>
          </article>
        </section>
        <section className="main-section" id="operators">
          <header>Operators</header>
          <hr />
          <article>
            <h2>Python Operators</h2>
            <p>
              Operators are used to perform operations on variables and values.
              <br />
              In the example below, we use the{" "}
              <span className="crimson">+</span> operator to add together two
              values:
            </p>
            <p>Python divides the operators in the following groups:</p>
            <ul>
              <li>Arithmetic operators</li>
              <li>Assignment operators</li>
              <li>Comparison operators</li>
              <li>Logical operators</li>
              <li>Identity operators</li>
              <li>Membership operators</li>
              <li>Bitwise operators</li>
            </ul>

            <h3>Python Arithmetic Operators</h3>
            <p>
              Arithmetic operators are used with numeric values to perform
              common mathematical operations:
            </p>
            <h3>Python Assignment Operators</h3>
            <p>Assignment operators are used to assign values to variables:</p>
            <h3>Python Comparison Operators</h3>
            <p>Comparison operators are used to compare two values:</p>
            <h3>Python Logical Operators</h3>
            <p>Logical operators are used to combine conditional statements:</p>
            <h3>Python Identity Operators</h3>
            <p>
              Identity operators are used to compare the objects, not if they
              are equal, but if they are actually the same object, with the same
              memory location:
            </p>
            <h3>Python Membership Operators</h3>
            <p>
              Membership operators are used to test if a sequence is presented
              in an object:
            </p>
            <h3>Python Bitwise Operators</h3>
            <p>Bitwise operators are used to compare (binary) numbers:</p>
          </article>
        </section>
        <section className="main-section" id="lists">
          <header>Lists</header>
          <hr />
          <article>
            <code>
              mylist = [<span className="crimson">"apple"</span>,{" "}
              <span className="crimson">"banana"</span>,{" "}
              <span className="crimson">"cherry"</span>]
            </code>
            <h2>List</h2>
            <p>
              Lists are used to store multiple items in a single variable.
              <br />
              Lists are one of 4 built-in data types in Python used to store
              collections of data, the other 3 are Tuple, Set, and Dictionary,
              all with different qualities and usage.
              <br />
              Lists are created using square brackets:
            </p>
            <h3>List Items</h3>
            <p>
              List items are ordered, changeable, and allow duplicate values.
              <br />
              List items are indexed, the first item has index{" "}
              <span className="crimson">[0]</span>, the second item has index{" "}
              <span className="crimson">[1]</span> etc.
            </p>
            <h3>Ordered</h3>
            <p>
              When we say that lists are ordered, it means that the items have a
              defined order, and that order will not change.
              <br />
              If you add new items to a list, the new items will be placed at
              the end of the list.
            </p>
            <span className="note">
              <strong>Note:</strong> There are some list methods that will
              change the order, but in general: the order of the items will not
              change.
            </span>
            <h3>Changeable</h3>
            <p>
              The list is changeable, meaning that we can change, add, and
              remove items in a list after it has been created.
            </p>
          </article>
        </section>
        <section className="main-section" id="tuples">
          <header>Tuples</header>
          <hr />
          <article>
            <code>
              mytuple = (<span className="crimson">"apple"</span>,{" "}
              <span className="crimson">"banana"</span>,{" "}
              <span className="crimson">"cherry"</span>)
            </code>
            <h2>Tuple</h2>
            <p>
              Tuples are used to store multiple items in a single variable.
              <br />
              Tuple is one of 4 built-in data types in Python used to store
              collections of data, the other 3 are List, Set, and Dictionary,
              all with different qualities and usage.
              <br />A tuple is a collection which is ordered and{" "}
              <strong>unchangeable</strong>.<br />
              Tuples are written with round brackets.
            </p>
            <h3>Tuple Items</h3>
            <p>
              Tuple items are ordered, unchangeable, and allow duplicate values.
              <br />
              Tuple items are indexed, the first item has index{" "}
              <span className="crimson">[0]</span>, the second item has index{" "}
              <span className="crimson">[1]</span> etc.
            </p>
            <h3>Ordered</h3>
            <p>
              When we say that tuples are ordered, it means that the items have
              a defined order, and that order will not change.
            </p>
            <h3>Unchangeable</h3>
            <p>
              Tuples are unchangeable, meaning that we cannot change, add or
              remove items after the tuple has been created.
            </p>
            <h3>Allow Duplicates</h3>
            <p>
              Since tuples are indexed, they can have items with the same value:
            </p>
          </article>
        </section>
        <section className="main-section" id="sets">
          <header>Sets</header>
          <hr />
          <article>
            <code>
              myset = <span className="crimson">"apple"</span>,{" "}
              <span className="crimson">"banana"</span>,{" "}
              <span className="crimson">"cherry"</span>
            </code>

            <h2>Set</h2>
            <p>
              Sets are used to store multiple items in a single variable.
              <br />
              Set is one of 4 built-in data types in Python used to store
              collections of data, the other 3 are List, Tuple, and Dictionary,
              all with different qualities and usage.
              <br />A set is a collection which is <em>unordered</em>,{" "}
              <em>unchangeable*</em>, and <em>unindexed</em>.
            </p>
            <span className="note">
              <strong>* Note:</strong> Set <em>items</em> are unchangeable, but
              you can remove items and add new items.
            </span>
            <p>Sets are written with curly brackets.</p>
            <h3>Set Items</h3>
            <p>
              Set items are unordered, unchangeable, and do not allow duplicate
              values.
            </p>
            <h3>Unordered</h3>
            <p>
              Unordered means that the items in a set do not have a defined
              order.
              <br />
              Set items can appear in a different order every time you use them,
              and cannot be referred to by index or key.
            </p>
            <h3>Unchangeable</h3>
            <p>
              Set items are unchangeable, meaning that we cannot change the
              items after the set has been created.
            </p>
            <span className="note">
              Once a set is created, you cannot change its items, but you can
              remove items and add new items.
            </span>
            <h3>Duplicates Not Allowed</h3>
            <p>Sets cannot have two items with the same value.</p>
          </article>
        </section>
        <section className="main-section" id="dictionaries">
          <header>Dictionaries</header>
          <hr />
          <article>
            <h2>Dictionary</h2>
            <p>
              Dictionaries are used to store data values in key:value pairs.
              <br />A dictionary is a collection which is ordered*, changeable
              and do not allow duplicates.
            </p>
            <h3>Dictionary Items</h3>
            <p>
              Dictionary items are ordered, changeable, and does not allow
              duplicates.
              <br />
              Dictionary items are presented in key:value pairs, and can be
              referred to by using the key name.
            </p>
            <h3>Ordered or Unordered?</h3>
            <span className="note">
              As of Python version 3.7, dictionaries are ordered. In Python 3.6
              and earlier, dictionaries are unordered.
            </span>
            <p>
              When we say that dictionaries are ordered, it means that the items
              have a defined order, and that order will not change.
              <br />
              Unordered means that the items does not have a defined order, you
              cannot refer to an item by using an index.
            </p>
            <h3>Changeable</h3>
            <p>
              Dictionaries are changeable, meaning that we can change, add or
              remove items after the dictionary has been created.
            </p>
            <h3>Duplicates Not Allowed</h3>
            <p>Dictionaries cannot have two items with the same key:</p>
            <h3>Dictionary Length</h3>
            <p>
              To determine how many items a dictionary has, use the{" "}
              <span className="crimson">len()</span> function:
            </p>
          </article>
        </section>
        <section className="main-section" id="reference">
          <header>Reference</header>
          <hr />
          <article>
            <ul>
              <li>
                All the documentation in this page is taken from{" "}
                <a
                  href="https://www.w3schools.com/python/default.asp"
                  target="_blank"
                >
                  W3Schools
                </a>
              </li>
            </ul>
          </article>
        </section>
      </main>
    </div>
  );
}
