#!/bin/bash

# Deploy to Google Cloud Run
gcloud run deploy portfolio `
  --source . `
  --allow-unauthenticated `
  --region us-central1 `
  --project axel-delakowski
