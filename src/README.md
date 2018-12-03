# Rich Domain Model vs Anemic Domain Model in JavaScript _ES6_
Sadly Rich Data Models in Domain Driven Design has been misunderstood. This is my contribution to JS lovers to
put an end to this simple methodology that made complex by many tutors!
Due to lack of interface in JavaScript as latest spec of publish time of this document, in example provided
in this section I manually created interface by throwing error if method not implemented.

There is no need for long long description when code is clear, However, briefly speaking; I created a
Subscription Model containing three ObjectValue (Name, Email, and ExpirationDate). Each ValueObject being validated
using Validator services. Horrific thing about ES6 is lack of visibility otherwise, Subscription constructor should
be declared `private`.

My deep apologies to Kent Beck and Uncle bob for not being TDD here, in
my defence I wasn't sure what I was building! I guess I write some units later.