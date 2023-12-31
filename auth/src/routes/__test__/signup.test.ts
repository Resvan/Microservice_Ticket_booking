import request from 'supertest';
import { app } from '../../app';

it('returns a 201 on signup success', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password'
    })
    .expect(201)
});


it('returns a 400 with an invalid password', async () => {
  await request(app)
  .post('/api/users/signup')
  .send({
    email: 'test@test.com',
    password: ''
  })
  .expect(400)

  await request(app)
    .post('/api/users/signup')
    .send({
      email: '',
      password: 'password'
    })
    .expect(400)
});

it('returns a 400 on user exist', async () => {
  await request(app)
  .post('/api/users/signup')
  .send({
    email: 'test@test.com',
    password: 'password'
  })
  .expect(201)
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password'
    })
    .expect(400)
});

it('sets a cookie after successful signup',async () => {
  const response = await request(app)
    .post('/api/users/signup')
    .send({
      email:'test@test.com',
      password:'password'
    })
    .expect(201);

    expect(response.get('Set-Cookie')).toBeDefined();
})