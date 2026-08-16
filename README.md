# Synora

Synora is an evolving backend systems engineering project.

## Job API

The Job API allows an external application to submit a job to Synora.

### Submit a Job

**Endpoint**

`POST /jobs`

**Request**

The request must contain a JSON body with a `name` field.

```json
{
  "name": "example-job"
}
```
