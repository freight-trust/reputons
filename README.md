# Reputon 

[rfc7070](https://tools.ietf.org/html/rfc7070)
[7072](https://tools.ietf.org/html/rfc7072)

## Abstract

This is a preliminary attempt at establishing a multi-faceted "reputation"
that can asset the probability that you are not dealing with a "fradulent" 
contract. 

## Overview: Reputation Interchange

`(reputon)` schema + `(repute)` reputation query protocol = `[replet]`


### Reputation Query Protocol

> source, https://tools.ietf.org/html/rfc7072

 For example, given the following template:

```curl
http://{service}/{application}/{subject}/{assertion}
```

 unambigously means,

```curl
http://{service}/{application}/{subject}/{assertion}/a={a}/b={b}
```

### By fradulent we mean "not pertaining to the intended contract address owner"

This is *not* an attempt to offer a *consumer reports* style review of the 
contract address in question, rather its to prevent a "man in the middle" or
otherwise deceptive practice of diverting a user from interacting wit the 
**de facto** legitmate contract.

The additional API functions are either provided by [us](https://github.com/freight-trust), 
JSON RPC for [conforming EVM clients](https://github.com/hyperledger/besu), 3rd 
party data providers like [amberdata](https://amberdata.io) or sites like
[defipulse.com](https://defipulse.com).

## 

## Reputon RFC

> source: https://tools.ietf.org/html/rfc7070

   A reputon expressed in JSON is a set of key-value pairs, where the
   keys are the names of particular attributes that comprise a reputon
   (as listed above, or as provided with specific applications), and
   values are the content associated with those keys.  The set of keys
   that make up a reputon within a given application are known as that
   application's "response set".

   A reputon object typically contains a reply corresponding to the
   assertion for which a client made a specific request.  For example, a
   client asking for assertion "sends-spam" about domain "example.com"
   would expect a reply consisting of a reputon making a "sends-spam"
   assertion about "example.com" and nothing more.  If a client makes a
   request about a subject but does not specify an assertion of
   interest, the server can return reputons about any assertion for
   which it has data; in effect, the client has asked for any available
   information about the subject.  A client that receives an irrelevant
   reputon simply ignores it.

   An empty reputon is an acknowledgment by the server that the request
   has been received, and serves as a positive indication that the
   server does not have the information requested.  This is semantically
   equivalent to returning a reputon with a "sample-size" of zero.


## Terms

OBJECT:  a JSON object, defined in Section 2.2 of [JSON]

MEMBER:  a member of a JSON object, defined in Section 2.2 of [JSON]

MEMBER-NAME:  the name of a MEMBER, defined as a "string" in
      Section 2.2 of [JSON]

MEMBER-VALUE:  the value of a MEMBER, defined as a "value" in
      Section 2.2 of [JSON]

ARRAY:  an array, defined in Section 2.3 of [JSON]

ARRAY-VALUE:  an element of an ARRAY, defined in Section 2.3 of
      [JSON]

   NUMBER:  a "number" as defined in Section 2.4 of [JSON]

   INTEGER:  an "integer" as defined in Section 2.4 of [JSON]

   STRING:  a "string" as defined in Section 2.5 of [JSON]

## Structure

reputation-object:  an OBJECT containing a MEMBER reputation-context
      and a MEMBER reputon-list

reputation-context:  a MEMBER with MEMBER-NAME "application" and
      MEMBER-VALUE a STRING (see Section 3)

reputon-list:  a MEMBER with MEMBER-NAME "reputons" and MEMBER-VALUE
      a reputon-array

reputon-array:  an ARRAY, where each ARRAY-VALUE is a reputon

reputon:  an OBJECT, where each MEMBER is a reputon-element

reputon-element:  one of the following, defined below: rater-value,
      assertion-value, rated-value, rating-value, conf-value, normal-
      value, sample-value, gen-value, expire-value, ext-value; note the
      following:

      *  The order of reputon-element members is not significant.

      *  A specific reputon-element MUST NOT appear more than once.

      *  rater-value, assertion-value, rated-value, and rating-value are
         REQUIRED.

rater-value:  a MEMBER with MEMBER-NAME "rater" and MEMBER-VALUE a
      STRING (see "rater" in Section 3.1)

assertion-value:  a MEMBER with MEMBER-NAME "assertion" and MEMBER-
      VALUE a STRING (see "assertion" in Section 3.1)

rated-value:  a MEMBER with MEMBER-NAME "rated" and MEMBER-VALUE a
      STRING (see "rated" in Section 3.1)
 



## License 

This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.

* Imprint Legal 
Under no circumstances and under no legal theory, whether tort (including negligence), contract, or otherwise, shall any Contributor, or anyone who distributes Covered Software as permitted above, be liable to You for any direct, indirect, special, incidental, or consequential damages of any character including, without limitation, damages for lost profits, loss of goodwill, work stoppage, computer failure or malfunction, or any and all other commercial damages or losses, even if such party shall have been informed of the possibility of such damages. This limitation of liability shall not apply to liability for death or personal injury resulting from such party’s negligence to the extent applicable law prohibits such limitation. Some jurisdictions do not allow the exclusion or limitation of incidental or consequential damages, so this exclusion and limitation may not apply to You.