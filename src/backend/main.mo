import List "mo:core/List";
import Time "mo:core/Time";

actor {
  type Submission = {
    name : Text;
    propertyName : Text;
    message : Text;
    timestamp : Time.Time;
  };

  let submissions = List.empty<Submission>();

  public shared ({ caller }) func submitContactForm(name : Text, propertyName : Text, message : Text) : async () {
    let newSubmission : Submission = {
      name;
      propertyName;
      message;
      timestamp = Time.now();
    };
    submissions.add(newSubmission);
  };

  public query ({ caller }) func getAllSubmissions() : async [Submission] {
    submissions.toArray();
  };
};
