aws s3 rm s3://qmax-website-v2 --recursive
aws s3 sync ./out s3://qmax-website-v2

aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
