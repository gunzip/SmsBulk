$Id$

Description
===========
This module exploits the power of views_bulk_operations and smsframework
to mass send SMS to a filtered list of numbers (even programatically).

It works with practically anything that can provide a phone number field:

* cck fields and nodes (contact lists ?)
* users + core profile module
* users + content profile module
* civicrm contacts (trough drupal views)

Installation
============
1. Install those modules first:

  http://drupal.org/project/views_bulk_operations
  http://drupal.org/project/views
  http://drupal.org/project/smsframework

Optionally install "token" module to send tokenized SMS:

  http://drupal.org/project/token

2. Activate the modules (sms_user/sms_blast modules are __NOT__ needed)
   and configure smsframework

10 Jun 2009:

  *** THIS MODULE WON'T WORK WITH OLDER VERSIONS OF VIEWS_BULK_OPERATIONS !!!
  *** YOU __MUST__ INSTALL THE LATEST (DEVELOPMENT) VERSION OF VIEWS_BULK_OPERATIONS !!!

3. There's a __BUG IN CIVICRM__ <= 2.2.5 that prevents phone type
   fields / filters to works in drupal views. You have to patch you civicrm module
   with this: http://issues.civicrm.org/jira/browse/CRM-4616 (or use civicrm >= 2.2.6)

4. Install smsbulk as usual, eventually check the settings in admin/smsbulk

Documentation
=============
Quickstart (example with core profile module):

1. Activate core profile module
2. Add a text field to the profile here: admin/user/profile "Phone number"
3. Add some user with phone numbers
4. Create a view with

    type    = user
    style   = bulk operation
    display = page (set up a path as usual)

choose to display two fields: user->name and profile->phone number.

Under the view bulk operation style settings:

  - select "Merge single action's form with node selection view"
  - choose 'Send  sms to drupal users' under 'Selected operations'
  - if you have a large list of numbers set: "Use Batch API"
  - deselect "Display processing result"

5. Save the view and visit the page.
6. Select the field 'Phone number' from the drop down list and write the SMS text.
7. Select the rows with recipients then click 'Send'
8. Please contribute reporting bugs and issues

Developers
==========

This module provides two hooks:

1. hook_smsbulk_sms_sent($params): called after a message is sent
2. hook_smsbulk_validate_number($number): called to validate and/or modify the phone numbers

an example of the their usage is provided into the smsbulk_example module.

Todo
====

* a lot of tests
* how to deal with tokens and length limit ? silently truncate sms text ?
* a better help text
* fix engRish (please help :)
* suggestions ?

Credits
=======
gunzip @ http://drupal.org/user/25151
